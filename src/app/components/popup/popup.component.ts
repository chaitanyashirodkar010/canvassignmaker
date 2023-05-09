import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {fabric } from 'fabric';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  
  
  ContainerCanvas: fabric.Canvas;
  shapecanvas: fabric.Canvas;
  width: number = 0;
  height: number = 0;
  selectedType: string = 'Shape';
  clippedShape: fabric.Object | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<{ type: string, obj: { version: string; objects: fabric.Object[]; } }>, public dialogRef: MatDialogRef<PopupComponent>)
  {}

  ngOnInit(){
    this.shapecanvas = new fabric.Canvas("canvas-shape");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.ContainerCanvas=  new fabric.Canvas("ContainerCanvas", {
      width: this.width,
      height: this.height,
      preserveObjectStacking: true
    });

    this.canvasDraw();

  }
  canvasDraw() {

    // this.clearCanvas(this.ContainerCanvas);
    // this.ContainerCanvas.loadFromJSON(this.data);
    let dt: Object[] = [];
    // let shape: fabric.Object | undefined;
    this.data.forEach(m => {
      if (m.type == "Shape") {
        let clipPath = m.obj.objects.find(x => x.name == "ShapeToClip");
        this.clippedShape = m.obj.objects.find(x => x.name == "shapeFace");
        m.obj.objects.forEach(x => {
          x.selectable = false; x.evented = false;
          if (x.name == "clipped") {
            x.selectable = true; x.evented = true;
            // x.clipPath = undefined;
            // x.name = "Object";
            // clipArray.push(x);
          }
          this.ContainerCanvas.add(x);
          this.ContainerCanvas.centerObject(x);
          if(x.name != "ShapeToClip" && x.name != "shapeFace"){
            this.ContainerCanvas.sendBackwards(x,true);
          }
          
          
        });

        let prevObject: fabric.Object | undefined;
      this.ContainerCanvas.on("mouse:down", object => {
          let objName = object.target?.name;

          if (objName == "clipped" && object.target) {
            object.target.set("clipPath", undefined);
            object.target.set("name", "Object");
            if (prevObject){
              prevObject?.set("clipPath", this.clippedShape);
              prevObject?.set("name", "clipped");
              prevObject = undefined;
            }
              
            prevObject = object.target;
          }
          else if (object.target == null || object.target == undefined || object.target != prevObject) {

            // if (prevObject)
            prevObject?.set("clipPath", this.clippedShape);
            prevObject?.set("name", "clipped");
            prevObject = undefined;
            
            // canvas.requestRenderAll();
          }
          else if (object.target) {
            prevObject = object.target;
          }

          // var version = shapeCanvas.toJSON().version;
          // this.currentObjects = { type: "Shape", obj: { version: version, objects: tempShape } };
          // this.currentObjects = { type: "Shape", obj: shapeCanvas.toJSON() };
        });
        // var gp = new fabric.Group([...m.obj.objects]);
       
        // dt.push(...m.obj.objects);
      }
      else {
        dt.push(...m.obj.objects);
      }

      // if (m?.shapes) {
      //   m.selectable = true;
      //   this.drawShapes1(this.ContainerCanvas, m);
      // }
      // else { this.draw(this.ContainerCanvas, m); }

    });
    

    if (dt != null && dt != undefined && dt.length > 0) {
      let tp: { version: string; objects: Object[]; } = {
        version: this.data[0].obj.version,
        objects: dt
      }

      this.ContainerCanvas.loadFromJSON(tp, this.ContainerCanvas.renderAll.bind(this.ContainerCanvas));

    }

    // this.setBackgroundImage(this.ContainerCanvas);
  }

  clearCanvas(canvas: fabric.Canvas) {
    let clippedObjects: Array<fabric.Object> = [];
    canvas.getObjects().forEach(element => {
      if (element.name !== "clipped" && element.name !== "Object") {
        // canvas.bringForward(element,true);
      }
      else{
        element.clipPath = undefined;
        // canvas.bringForward(element,true);
        clippedObjects.push(element);
      }
      canvas.remove(element);
    });
    return clippedObjects;
    // canvas.off("mouse:down");
  }

  shapeEmitter(shape: any){
    
    this.shapecanvas.clear();
    var path = new fabric.Path(shape.path, {
      width: 10 * shape.width_ratio,
      height: 10 * shape.height_ratio,
      selectable: false,
      evented: false,
      scaleX: 0.3,
      scaleY: 0.3,
      left: 0,
      top: 0
    });
    this.shapecanvas.add(path);
    this.shapecanvas.centerObject(path);

    // this.clearCanvas(this.ContainerCanvas);
    this.drawShapes(this.ContainerCanvas,shape)
    // this.data.forEach(m => {
    //   m.obj.objects.forEach(x => {
    //     x.selectable = false; x.evented = false;
    //     if (x.name == "clipped") {
    //       x.selectable = true; x.evented = true;
    //       x.clipPath = undefined;
    //       // clipArray.push(x);
    //     }
    //     this.ContainerCanvas.add(x);
    //     if(x.name != "ShapeToClip"){
    //       this.ContainerCanvas.sendBackwards(x,true);
    //     }
        
        
    //   });
    // });



  }

  drawShapes(shapeCanvas: fabric.Canvas, selectedShape: any) {
    if (shapeCanvas) {
      // let ctx  =  shapeCanvas.getContext();
      let clippedObjects = this.clearCanvas(shapeCanvas);
      


      let path = selectedShape.path.split(" ") ?? [];
      let startCord: Array<string> = path[1].split(",");
      let [x, y] = startCord.map(x => Number(x));
      // x += 100;
      // y += 100;

      path[1] = x + "," + y;
      let pathJoin = path.join(" ");
      let groupList: Array<fabric.Path> = [];
      let groupList1: Array<fabric.Path> = [];

      // Shadow

      for (let i = 5; i < 12; i++) {
        let startCord: Array<string> = path[1].split(",");
        let [x, y] = startCord.map(x => Number(x));
        x += i / 10;
        y += i / 12;

        path[1] = x + "," + y;
        let pathJoin = path.join(" ");

        let shape = new fabric.Path(pathJoin, {
          stroke: selectedShape.sideColor,
          originY: "center",
          originX: "center",
          selectable: selectedShape.selectable,
          evented: false,
          scaleX: 4,
          scaleY: 4,
          absolutePositioned: true,
        });
        let shape5 = new fabric.Path(pathJoin, {
          stroke: selectedShape.sideColor,
          originY: "center",
          originX: "center",
          scaleX: 4,
          scaleY: 4,
          absolutePositioned: true,
        });

        // shapeCanvas.sendToBack(shape);
        shapeCanvas.sendBackwards(shape, true);
        groupList.push(shape);
        groupList1.push(shape5);
      }

      path = selectedShape.path.split(" ") ?? [];
      startCord = path[1].split(",");
      [x, y] = startCord.map(x => Number(x));
      // x += 100;
      // y += 100;

      path[1] = x + "," + y;
      // boarder/storke
      for (let i = 0; i < 6; i++) {
        let startCord: Array<string> = path[1].split(",");
        [x, y] = startCord.map(x => Number(x));
        x -= i / 10;
        y -= i / 12;

        path[1] = x + "," + y;
        let pathJoin = path.join(" ");

        let shape = new fabric.Path(pathJoin, {
          stroke: selectedShape.boarderColor ?? "black",
          originY: "center",
          originX: "center",
          selectable: selectedShape.selectable,
          evented: false,
          scaleX: 4,
          scaleY: 4,
          absolutePositioned: true,
        });
        let shape4 = new fabric.Path(pathJoin, {
          stroke: selectedShape.boarderColor ?? "black",
          originY: "center",
          originX: "center",
          scaleX: 4,
          scaleY: 4,
          absolutePositioned: true,
        });

        // shapeCanvas.sendToBack(shape);
        shapeCanvas.sendBackwards(shape, true);
        groupList.push(shape);
        groupList1.push(shape4);
      }
      path = selectedShape.path.split(" ") ?? [];
      startCord = path[1].split(",");

      path[1] = x + "," + y;
      pathJoin = path.join(" ");

      let shape = new fabric.Path(pathJoin, {
        name: "shapeFace",
        stroke: selectedShape.color ?? "green",
        originY: "center",
        originX: "center",
        fill: selectedShape.color ?? "green",
        selectable: selectedShape.selectable,
        evented: false,
        scaleX: 4,
        scaleY: 4,
        absolutePositioned: true,
      });
      let shape3 = new fabric.Path(pathJoin, {
        name: "shapeFace",
        stroke: selectedShape.color ?? "green",
        originY: "center",
        originX: "center",
        fill: selectedShape.color ?? "green",
        scaleX: 4,
        scaleY: 4,
        absolutePositioned: true,
      });
      // shapeCanvas.sendToBack(shape);
      shapeCanvas.sendBackwards(shape, true);
      this.clippedShape = shape;

      groupList.push(shape);
      groupList1.push(shape3);
      let shape1 = new fabric.Path(pathJoin, {
        name: "ShapeToClip",
        stroke: selectedShape.boarderColor ?? selectedShape.color,
        originY: "center",
        originX: "center",
        fill: 'rgba(0,0,0,0)',
        selectable: selectedShape.selectable,
        evented: false,
        scaleX: 4,
        scaleY: 4,
        absolutePositioned: true,

      });
      let shape2 = new fabric.Path(pathJoin, {
        name: "ShapeToClip",
        stroke: selectedShape.boarderColor ?? selectedShape.color,
        originY: "center",
        originX: "center",
        fill: 'rgba(0,0,0,0)',
        scaleX: 4,
        scaleY: 4,
        absolutePositioned: true,

      });

      groupList.push(shape1);
      groupList1.push(shape2);

      shapeCanvas.add(...groupList);
      groupList.forEach(m => {
        shapeCanvas.centerObject(m);
      })
      

      clippedObjects.forEach(m => {
        m.clipPath = shape;
        shapeCanvas.add(m);
      });
      // ctx.clip();

      // groupList1.forEach(m => { m.selectable = true; m.evented = true });

      // var gp = new fabric.Group(groupList1);
      var tempShape: Array<fabric.Object> = groupList1;

      var img = new Image();
      var image: fabric.Image;


      // img.onload = () => {
      //   image = new fabric.Image(img,
      //     {
      //       name: "clipped",
      //       strokeDashArray: [7, 7],
      //       cornerStyle: 'circle',
      //       left: 50,
      //       top: 100,
      //       absolutePositioned: true,
      //       scaleX: selectedShape.scaleFactorx,
      //       scaleY: selectedShape.scaleFactorx,
      //       type: "Image",
      //       // clipPath: shape

      //     });

      //   tempShape.push(image);
      //   shapeCanvas.add(image);

      //   var version = shapeCanvas.toJSON().version;
      //   // this.currentObjects = { type: "Shape", obj: { version: version, objects: tempShape } };
      //   // this.currentObjects = {type: "Shape", obj:  shapeCanvas.toJSON()};

      //   shapeCanvas.sendBackwards(image,true); //text
      //   let text = new fabric.Text(selectedShape.value, {
      //     fill: "green",
      //     fontSize: Number(selectedShape.size) ?? 100,
      //     left: 50,
      //     top: 100,
      //     fontFamily: selectedShape.font,
      //     fontWeight: 'bold',
      //     // clipPath: shape,
      //     name: "clipped",
      //     type: "Text"
      //   });
      //   shapeCanvas.add(text);
      //   shapeCanvas.sendBackwards(text,true);

      //   tempShape.push(text);
  

      // }
      // img.src = selectedShape.img ?? "";


      
      //Disabling corners
      fabric.Object.prototype.setControlsVisibility({
        'ml': false, 'tl': false, 'tr': false,
        'mr': false, 'mb': false, 'bl': false, 'mt': false
      });

      // if (!selectedShape.selectable) {
      //   let prevObject: fabric.Object | undefined;
      //   shapeCanvas.on("mouse:down", object => {
      //     let objName = object.target?.name;

      //     if (objName == "clipped" && object.target) {
      //       object.target.set("clipPath", undefined);
      //       object.target.set("name", "Object");
      //       if (prevObject){
      //         prevObject?.set("clipPath", shape);
      //         prevObject?.set("name", "clipped");
      //         prevObject = undefined;
      //       }
              
      //       prevObject = object.target;
      //     }
      //     else if (object.target == null || object.target == undefined || object.target != prevObject) {

      //       // if (prevObject)
      //       prevObject?.set("clipPath", shape);
      //       prevObject?.set("name", "clipped");
      //       prevObject = undefined;
            
      //       // canvas.requestRenderAll();
      //     }
      //     else if (object.target) {
      //       prevObject = object.target;
      //     }

      //     var version = shapeCanvas.toJSON().version;
      //     // this.currentObjects = { type: "Shape", obj: { version: version, objects: tempShape } };
      //     // this.currentObjects = { type: "Shape", obj: shapeCanvas.toJSON() };
      //   });
      // }

      // fabric.Object.prototype.controls['deleteControl'] = new fabric.Control({
      //   x: 0.5,
      //   y: -0.5,
      //   offsetY: 0,
      //   cursorStyle: 'pointer',
      //   mouseUpHandler: this.deleteObject(this),
      //   render: this.renderIcon(Icons.deleteIcon),
      //   // cornerSize: 24
      // });

      // fabric.Object.prototype.controls['listControl'] = new fabric.Control({
      //   x: -0.5,
      //   y: -0.5,
      //   offsetY: 0,
      //   cursorStyle: 'pointer',
      //   mouseUpHandler: this.listObject(this),
      //   render: this.renderIcon(Icons.ListIcon),
      // });

    }
  }
}
