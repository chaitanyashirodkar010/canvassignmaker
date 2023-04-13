import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { shapes } from 'src/app/constants/constants';
import {  IShapes } from 'src/app/interface/Isignmaker';
import { ShapeComponent } from '../shape/shape.component';

@Component({
  selector: 'app-shapes-side-bar',
  templateUrl: './shapes-side-bar.component.html',
  styleUrls: ['./shapes-side-bar.component.scss']
})
export class ShapesSideBarComponent {

  constructor(private dialog: MatDialog){}
  
  @Output() shapeEmitter = new EventEmitter<IShapes>;

  SelectedShape(code: string): void{
    const shape = shapes.shapesArr.find(m => m.code == code);
    // const dialogRef = this.dialog.open(ShapeComponent,{
    //   width: "500px",
    //   height: "500px",
    //   data: {"shapes" : shape?.data}});
    // dialogRef.afterClosed().subscribe(res => {
    //   // this.shapeEmitter.emit(shape?.data);
    // });
     this.shapeEmitter.emit(shape?.data);
  }
}
