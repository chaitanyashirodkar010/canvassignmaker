import { Component, EventEmitter, Output } from '@angular/core';
import { shapes } from 'src/app/constants/constants';
import {  IShapes } from 'src/app/interface/Isignmaker';

@Component({
  selector: 'app-shapes-side-bar',
  templateUrl: './shapes-side-bar.component.html',
  styleUrls: ['./shapes-side-bar.component.scss']
})
export class ShapesSideBarComponent {
  
  @Output() shapeEmitter = new EventEmitter<IShapes>;

  SelectedShape(code: string){
    const shape = shapes.shapesArr.find(m => m.code == code);
    
    this.shapeEmitter.emit(shape?.data);
  }
}
