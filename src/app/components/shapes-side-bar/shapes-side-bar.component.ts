import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { shapes } from 'src/app/constants/constants';
import { IShapes } from 'src/app/interface/Isignmaker';
import { ShapeComponent } from '../shape/shape.component';

@Component({
  selector: 'app-shapes-side-bar',
  templateUrl: './shapes-side-bar.component.html',
  styleUrls: ['./shapes-side-bar.component.scss']
})
export class ShapesSideBarComponent {

  constructor(private dialog: MatDialog) { }

  @Input() product: any;
  @Output() shapeEmitter = new EventEmitter<IShapes>;
  shapeLst: Array<{
    id: number,
    title: string,
    url: string,
    groups: number,
    type: string
  }> = [];

  ngOnInit(){
    if(this.product.title == 'Lit Shape Sign'){
      this.shapeLst = shapes.litshape;
    }
    else{
      this.shapeLst = shapes.faceshape;
    }
  }

  SelectedShape(id: number): void {
debugger
let a = shapes.shapesArr;
    const shape = shapes.shapesArr.find(m => m.id == id);


    this.shapeEmitter.emit(shape);
  }
}
