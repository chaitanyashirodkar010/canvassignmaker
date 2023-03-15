import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITextData } from 'src/app/interface/Isignmaker';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent {

  ctx: CanvasRenderingContext2D;
  c:any;
  @ViewChild('shapeCanvas') shapeCanvas: ElementRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ShapeComponent>)
  {}

  ngOnInit(){
  }

  ngAfterViewInit(){

    this.c = this.shapeCanvas.nativeElement;
    this.ctx = this.c.getContext('2d');
    this.c.width = window.innerWidth ;
    this.c.height = window.innerHeight;

    this.drawShape(this.data);
  }

  close(){
    this.dialogRef.close(null);
  }

  drawShape(data: ITextData){
    let path = data.shapes?.path.split(" ") ?? [];
    let startCord = path[1].split(",");
    let [x, y] = startCord.map(x => Number(x));
    x += 500;
    y += 500;

    path[1] = x + "," + y;
    let pathJoin = path.join(" ");
      this.ctx.lineWidth = 2;

    // Shadow
    for (let i = 0; i < 7; i++) {
      let startCord = path[1].split(",");
      let [x, y] = startCord.map(x => Number(x));
      x += i/5;
      y += i/5;

      path[1] = x + "," + y;
      let pathJoin = path.join(" ");

      const p = new Path2D(pathJoin);
      // if (data.shadowColor != undefined && data.shadowColor != null) {
      //   this.ctx.shadowColor = data.shadowColor;
      //   this.ctx.shadowBlur = 13;
      // }
      this.ctx.strokeStyle = data.sideColor ?? "Orange";
      this.ctx.stroke(p);
    }
    path = data.shapes?.path.split(" ") ?? [];
    startCord = path[1].split(",");
    [x, y] = startCord.map(x => Number(x));
    x += 200;
    y += 200;

    path[1] = x + "," + y;
    // boarder/storke
    for (let i = 0; i < 4; i++) {
      let startCord = path[1].split(",");
      let [x, y] = startCord.map(x => Number(x));
      x +=  i/5;
      y += i/5;

      path[1] = x + "," + y;
      let pathJoin = path.join(" ");

      const p = new Path2D(pathJoin);
      this.ctx.strokeStyle = data.boarderColor ?? "Blue";
      this.ctx.stroke(p);
      this.ctx.fillStyle = "White";
      this.ctx.fill(p);
    }

    path = data.shapes?.path.split(" ") ?? [];
    startCord = path[1].split(",");
    [x, y] = startCord.map(x => Number(x));
    x += 200;
    y += 200;

    path[1] = x + "," + y;
    pathJoin = path.join(" ");
    const p = new Path2D(pathJoin);
    this.ctx.strokeStyle = data.boarderColor ?? "Black";
    this.ctx.stroke(p);
    // this.ctx.fill(p);
  }
}
