import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { Icons, shapes } from 'src/app/constants/constants';
import { ITextData } from 'src/app/interface/Isignmaker';
import { fabric } from 'fabric';
// import 'fabric-customise-controls';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {

  c: any;
  ctx: CanvasRenderingContext2D;
  mouse: { x: number, y: number } = { x: 0, y: 0 };
  txtWidth: number;
  enableDraw: boolean;
  data: ITextData;
  rectOX: number;
  rectOY: number;
  click: boolean = false;
  canvas: fabric.Canvas;
  @ViewChild('workArea') workArea: ElementRef<any>;

  constructor(private renderer: Renderer2, private host: ElementRef) { }

  ngOnInit() {

    this.canvas = new fabric.Canvas("exampleCanvas", {
      width: window.innerWidth,
      height: window.innerHeight
    });

    this.data = {
      value: "LETTERS",
      font: "Tahoma",
      size: "100",
      color: "orange",
      raceColor: 'red',
      x: window.innerWidth / 2,
      y: 75,
      faceImage: "../assets/images/face-art/O60AC.png",
      shapes: shapes.star
    };
    this.setBackgroundImage();
    this.draw(this.data);
    // this.drawShapes(this.data)
  }


  inputChange(data: ITextData) {
    let { x, y } = this.data;
    this.data = data;
    this.data.x = x;
    this.data.y = y;
    this.draw(data);
  }

  setBackgroundImage() {
    this.canvas.setBackgroundImage("../assets/images/banner.png", this.canvas.renderAll.bind(this.canvas), {
      // backgroundImageOpacity: 1,
      originX: "left",
      originY: "top",
      scaleX: 0.3,
      scaleY: 0.3,
    });
  }

  clearCanvas() {
    this.canvas.getObjects().forEach(element => {
      if (element !== this.canvas.backgroundImage) {
        this.canvas.remove(element);
      }
    });
  }

  draw(data: ITextData | null) {
    this.clearCanvas();
    if (data != null && data.value != '') {
      let centreX = data.x != null && data.x != undefined ? data.x : this.c.width / 2;
      let centreY = data.y != null && data.y != undefined ? data.y : 75;
      // let _this = this;

      let text: fabric.Text;
      let textGroups: Array<fabric.Text> = [];


      //Text Shadow
      for (let i = 0; i < 7; i++) {
        if (data.shadowColor != undefined && data.shadowColor != null) {
          this.ctx.shadowColor = data.shadowColor;
          this.ctx.shadowBlur = 13;
        }
        text = new fabric.Text(data.value, {
          fill: data.sideColor ?? "Black",
          fontSize: Number(data.size) ?? 100,
          left: centreX + i,
          top: centreY + i,
          fontFamily: data.font,
          fontWeight: 'bold',
        });
        textGroups.push(text);
      }
      //Text boarder/storke
      for (let i = 0; i < 3; i++) {
        text = new fabric.Text(data.value, {
          fill: data.boarderColor ?? "Black",
          fontSize: Number(data.size) ?? 100,
          left: centreX + i,
          top: centreY + i,
          fontFamily: data.font,
          fontWeight: 'bold',
        });
        textGroups.push(text);
      }

      // Text Face

      text = new fabric.Text(data.value, {
        fill: data.color ?? "green",
        fontSize: Number(data.size) ?? 100,
        left: centreX,
        top: centreY,
        fontFamily: data.font,
        fontWeight: 'bold',
      });

      if (data.faceImage != undefined && data.faceImage != '') {
        fabric.util.loadImage(data.faceImage, function (img) {
          text.set('fill', new fabric.Pattern({
            source: img,
            repeat: 'repeat'
          }))
        });
      }
      // else {
      //   text.set('fill',data.color ?? "green");
      // }

      textGroups.push(text);

      this.txtWidth = text.getScaledWidth();
      // Displaying Race
      let rectX = centreX - 10;
      let rectY = centreY;
      let rectangleList: Array<fabric.Rect> = [];
      if (data.raceColor != undefined && data.raceColor != null) {
        for (let i = 1; i <= 3; i++) {
          let rect = new fabric.Rect({
            width: this.txtWidth + 32,
            height: 20,
            fill: 'black',
            left: rectX + i,
            top: ((Number(data.size) - 20) / 2) + rectY + i,
          });
          rectangleList.push(rect);
        }

        let rect = new fabric.Rect({
          width: this.txtWidth + 32,
          height: 20,
          fill: data.raceColor,
          left: rectX,
          top: (Number(data.size) - 20) / 2 + rectY,
        });
        rectangleList.push(rect);
      }

      //Forming group
      let group = new fabric.Group([...rectangleList, ...textGroups], {
        useSetOnGroup: false,
        borderDashArray: [7, 7],
        borderColor: "black",
        // hasControls: true,
      });


      fabric.Object.prototype.controls['deleteControl'] = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: 0,
        cursorStyle: 'pointer',
        mouseUpHandler: this.deleteObject(this),
        render: this.renderIcon(Icons.deleteIcon),
        // cornerSize: 24
      });


      //Disabling corners
      fabric.Object.prototype.setControlsVisibility({
        'ml': false, 'tl': false, 'tr': false,
        'mr': false, 'mtr': false, 'mb': false, 'bl': false, 'mt': false
      })
      // group.setControlsVisibility({
      //   'ml': false, 'tl': false, 'tr': false,
      //   'mr': false, 'mtr': false, 'mb': false, 'bl': false, 'mt': false
      // });

      // Render the Text on Canvas
      this.canvas.add(group);
    }

  }

  action(eventData: MouseEvent, transform: fabric.Transform, x: number, y: number) {
    var target = transform.target;
    var canvas = target.canvas;
    let rst = canvas?._scaleObject ?? false;
    // canvas?.requestRenderAll();
    return true;
  }

  deleteObject(_this: any) {

    return function (eventData: MouseEvent, transform: fabric.Transform, x: number, y: number) {
      var target = transform.target;
      var canvas = target.canvas;
      // var stage = target.canvas?.toSVG()??"";
      canvas?.remove(target);
      canvas?.requestRenderAll();
      _this.progressBar(target);
      return true;
    }
  }

  progressBar(target: fabric.Object) {
    let timerLeft = 0;
    let interval = setInterval(() => {
      if (timerLeft - 2000 / 1000 <= 0) {
        timerLeft = 0;
        clearInterval(interval);
      } else {
        timerLeft -= 2000 / 1000;

      }
      this.workArea.nativeElement
        .insertAdjacentHTML('beforeend', '<mat-progress-bar mode="determinate" [value]="timerLeft"></mat-progress-bar>');

    }, 2000)
  }

  renderIcon(icon: string) {
    return function (ctx: any, left: any, top: any, styleOverride: any, fabricObject: any) {
      // var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
      var img = document.createElement('img');
      img.src = icon;
      var size = 24;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(img, -size / 2, -size / 2, size, size);
      ctx.restore();
    }
  }

  listObject(_this: any) {
    return function (eventData: MouseEvent, transform: fabric.Transform, x: number, y: number) {
      var target = transform.target;
      eventData.clientX;
      eventData.clientY;
      var canvas = target.canvas;
      _this.workArea.nativeElement
        .insertAdjacentHTML('beforeend', `<ul class="sc-bdVaJa jgLspe" style="visibility: visible; position:absolute;left: 
        ${eventData.clientX}px; top: ${eventData.clientY}px;"><li class="sc-bwzfXH haAKrB" (click)=""><a>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt" 
        class="svg-inline--fa fa-arrows-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"><path fill="currentColor" 
        d="${shapes.Stretch.backgroundPath}"></path></svg>Stretch</a></li>
        <li class="sc-bwzfXH haAKrB" (click)="this.stretchObject()"><a>
        <svg aria-hidden="true"  data-prefix="fas" data-icon="clone" class="svg-inline--fa fa-clone fa-w-16 " 
        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" 
        d="${shapes.Copy.backgroundPath}"></path></svg>Duplicate</a>
        </li>
        <li class="sc-bwzfXH haAKrB" (click)="stretchObject()"><a><img 
        src="https://signmonkey.com/builder-30-03-2023-22/static/media/flip-horizontal.362ab177.svg" 
        width="15" height="15" alt="Horizontal Mirror">Mirror Horizontal</a></li>
        <li class="sc-bwzfXH haAKrB"><a>
        <img src="https://signmonkey.com/builder-30-03-2023-22/static/media/flip-vertical.9ed0dae7.svg" width="15"
        height="15" alt="Vertical Mirror">Mirror Vertical</a></li></ul>`);
      return true;
    }
  }

  stretchObject() {
    fabric.Object.prototype.setControlsVisibility({
      'ml': false, 'tl': false, 'tr': false,
      'mr': false, 'mtr': false, 'mb': false, 'bl': false, 'mt': false
    })
  }

  drawShapes(data: ITextData) {
    let upperCanvas = new fabric.Canvas("upperCanvas", {
      width: window.innerWidth,
      height: window.innerHeight,
      preserveObjectStacking: true
    });

    let path = data.shapes?.path.split(" ") ?? [];
    let startCord = path[1].split(",");
    let [x, y] = startCord.map(x => Number(x));
    x += 200;
    y += 200;

    path[1] = x + "," + y;
    let pathJoin = path.join(" ");
    let groupList: Array<fabric.Path> = [];

    // Shadow

    for (let i = 5; i < 12; i++) {
      let startCord = path[1].split(",");
      let [x, y] = startCord.map(x => Number(x));
      x += i / 10;
      y += i / 12;

      path[1] = x + "," + y;
      let pathJoin = path.join(" ");

      let shape = new fabric.Path(pathJoin, {
        stroke: 'black',
        originY: "center",
        originX: "center",
        // fill: 'rgba(0,0,0,0)',
        selectable: false,
        scaleX: 3,
        scaleY: 3
      });

      upperCanvas.sendBackwards(shape, true);
      groupList.push(shape);
    }

    path = data.shapes?.path.split(" ") ?? [];
    startCord = path[1].split(",");
    [x, y] = startCord.map(x => Number(x));
    x += 200;
    y += 200;

    path[1] = x + "," + y;
    // boarder/storke
    for (let i = 0; i < 6; i++) {
      let startCord = path[1].split(",");
      [x, y] = startCord.map(x => Number(x));
      x -= i / 10;
      y -= i / 12;

      path[1] = x + "," + y;
      let pathJoin = path.join(" ");

      let shape = new fabric.Path(pathJoin, {
        stroke: 'blue',
        originY: "center",
        originX: "center",
        // fill: 'rgba(0,0,0,0)',
        selectable: false,
        scaleX: 3,
        scaleY: 3
      });

      upperCanvas.sendBackwards(shape, true);
      groupList.push(shape);
    }
    path = data.shapes?.path.split(" ") ?? [];
    startCord = path[1].split(",");

    path[1] = x + "," + y;
    pathJoin = path.join(" ");

    let shape = new fabric.Path(pathJoin, {
      stroke: 'green',
      originY: "center",
      originX: "center",
      fill: 'green',
      selectable: false,
      scaleX: 3,
      scaleY: 3
    });
    upperCanvas.sendBackwards(shape, true);

    groupList.push(shape);
    shape = new fabric.Path(pathJoin, {
      stroke: 'green',
      originY: "center",
      originX: "center",
      fill: 'rgba(0,0,0,0)',
      selectable: false,
      scaleX: 3,
      scaleY: 3
    });
    upperCanvas.bringForward(shape, true);

    groupList.push(shape);
    shape.on("mouse:down", Object => {
      console.log("shape")
    });

    upperCanvas.add(...groupList);

    var img = new Image();
    var image: fabric.Image;
    var isImageClicked = false;
    img.onload = () => {
      image = new fabric.Image(img,
        {
          name: "image",
          strokeDashArray: [7, 7],
          cornerStyle: 'circle',
        });
      image.on('mouse:down', evt => {
        isImageClicked = true;
      });
      upperCanvas.add(image);
      upperCanvas.sendBackwards(image);
      // upperCanvas.sendBackwards(image,true); //text

    }
    img.src = "../assets/images/face-art/O60AC.png";

    // let text = new fabric.Text(data.value, {
    //   fill: data.color ?? "green",
    //   fontSize: Number(data.size) ?? 100,
    //   // left: centreX,
    //   // top: centreY,
    //   fontFamily: data.font,
    //   fontWeight: 'bold',
    // });
    // upperCanvas.add(text);
    // upperCanvas.sendBackwards(text);

    //Disabling corners
    fabric.Object.prototype.setControlsVisibility({
      'ml': false, 'tl': false, 'tr': false,
      'mr': false, 'mb': false, 'bl': false, 'mt': false
    });
    let isImageRemoved = false;
    let imageCanvas: fabric.Object | undefined;
    upperCanvas.on("mouse:down", object => {
      console.log(object)
      let canvas = object.target?.canvas ?? upperCanvas;
      if (object.target?.name != "image" && object.target?.name != "clipped") {
        if (object.target != undefined && object.target?.name == "image") {
          imageCanvas = object.target;
        }
        else {
          imageCanvas = upperCanvas.getObjects().find(m => m.name == "image");
        }
        if (imageCanvas) {
          canvas?.remove(imageCanvas);
          canvas?.requestRenderAll();
          isImageRemoved = true;
        }

        this.clippingImage(canvas, img, shape);
      }
      else {
        if (isImageRemoved) {
          let obj = imageCanvas ?? image;
          canvas?.add(obj);
          shape.set('fill', 'rgba(0,0,0,0)');
          shape.set('name', 'shape');
          isImageRemoved = false;
          canvas?.requestRenderAll();
        }
      }
    });

    fabric.Object.prototype.controls['deleteControl'] = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: 0,
      cursorStyle: 'pointer',
      mouseUpHandler: this.deleteObject(this),
      render: this.renderIcon(Icons.deleteIcon),
      // cornerSize: 24
    });

    fabric.Object.prototype.controls['listControl'] = new fabric.Control({
      x: -0.5,
      y: -0.5,
      offsetY: 0,
      cursorStyle: 'pointer',
      mouseUpHandler: this.listObject(this),
      render: this.renderIcon(Icons.ListIcon),
    });


    // groupList.push(shape);

    // let grp = new fabric.Group(groupList, {
    //   useSetOnGroup: false,
    //   borderDashArray: [7, 7],
    //   borderColor: "black",
    // });

    // upperCanvas.add(grp);

  }

  clippingImage(canvas: fabric.Canvas, img: any, shape: fabric.Object) {
    shape.set('fill', new fabric.Pattern({
      source: img,
      repeat: 'repeat'
    }));
    shape.set('name', 'clipped');
    canvas.requestRenderAll();
  }
}
