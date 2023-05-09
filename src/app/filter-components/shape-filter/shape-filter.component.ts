import { Component, EventEmitter, Output } from '@angular/core';
import { fabric } from 'fabric';
import { shapes } from 'src/app/constants/constants';

@Component({
  selector: 'app-shape-filter',
  templateUrl: './shape-filter.component.html',
  styleUrls: ['./shape-filter.component.scss']
})
export class ShapeFilterComponent {

  popularShapes = shapes.popularShapes.shapes;
  maincanvas: fabric.Canvas;

  @Output() shapeEmitter = new EventEmitter<any>();

  ngOnInit() {
    this.maincanvas = new fabric.Canvas("canvas-main");

  }

  ngAfterViewInit() {
    let shapeEle = document.getElementById("Popular");
    if (shapeEle) {
      let childrens = shapeEle.getElementsByTagName('canvas');
      if (childrens) {
        for (let i = 0; i < (childrens?.length ?? 0); i++) {
          try {
            let id = childrens[i].id.split('-')[1];
            if (id && id != '') {
              let canvas = new fabric.Canvas(childrens[i].id);
              let shape = this.popularShapes.find(m => m.id == Number(id));
              if (shape) {
                var path = new fabric.Path(shape.path, {
                  // width: 50 * shape.width_ratio,
                  // height: 50 * shape.height_ratio,
                  selectable: false,
                  evented: false,
                  scaleX: shape.sizeable_factor ?? 1,
                  scaleY: shape.sizeable_factor ?? 1,
                  left: 0,
                  top: 0

                });
                canvas.add(path);
                canvas.centerObject(path);
              }

            }
          }
          catch (ex) {

          }

        }

      }

    }

  }


  selectedShape(shape: any) {

    this.maincanvas.clear();
    var path = new fabric.Path(shape.path, {
      width: 110 * shape.width_ratio,
      height: 110 * shape.height_ratio,
      selectable: false,
      evented: false,
      // scaleX: shape.sizeable_factor??1,
      // scaleY: shape.sizeable_factor??1,
      left: 0,
      top: 0

    });
    this.maincanvas.add(path);
    this.maincanvas.centerObject(path);

    this.shapeEmitter.emit(shape);
  }
}
