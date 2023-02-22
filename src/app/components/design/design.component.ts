import { Component, HostListener, Input } from '@angular/core';
import { ITextData } from 'src/app/interface/Isignmaker';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {

  c: any;
  ctx: any;
  text: string;
  mouse: { x: number, y: number } = { x: 0, y: 0 };
  txtWidth: number;
  enableDraw: boolean;
  data: ITextData;
  rightBottom: {
    x: number,
    y: number,
    offsetX: number,
    offsetY: number,
  } = {x: -1, y: -1,offsetX: -1,offsetY: -1};

  ngOnInit() {
    this.c = document.getElementById("exampleCanvas");
    this.ctx = this.c.getContext("2d");

    this.c.width = window.innerWidth - 50;
    // this.c.height = window.innerHeight;
    this.c.height = "110";
    console.log("x:", this.c.width, " y:", this.c.height)
    this.c.style.cursor = "move";
    this.data = {
      value: "Naik",
      font: "Tahoma",
      size: "100px",
      color: "red"
    };
    this.draw( this.data );

   

  }

  @HostListener("mousedown", ["$event"]) public mousedown(event: MouseEvent) {
    this.enableDraw = true;
  };
  
  @HostListener("mouseup", ["$event"]) public mouseup(event: MouseEvent) {
    this.enableDraw = false;
  };
  
  @HostListener("mousemove", ["$event"]) public mousemove(event: MouseEvent) {
    // if (this.enableDraw) 
    {
      // context.fillStyle = "#1477CC";
      let r = this.c.getBoundingClientRect();
      // console.log("left:", r.left, " top:", r.top, "right: ", r.right, " bottom:",r.bottom)
      this.mouse.x = event.clientX - r.left;
      this.mouse.y = event.clientY - r.top;
      // console.log("x:", this.mouse.x, " y:", this.mouse.y)
      // console.log("Recx:", this.rightBottom.x, " Recy:", this.rightBottom.y)
      // console.log("client:", event.clientX, " client:",  event.clientY)
      // console.log("evtx:", event.x, " evty:",  event.y)
      if (this.mouse.x >= (this.rightBottom.x - this.rightBottom.offsetX) && this.mouse.x <= (this.rightBottom.x - this.rightBottom.offsetX + 20) &&
        this.mouse.y >= (this.rightBottom.y  - this.rightBottom.offsetY) && this.mouse.y <= (this.rightBottom.y  - this.rightBottom.offsetY+ 20)) {
        this.c.style.cursor = "nw-resize"
        if(this.enableDraw){
          debugger
          this.data = {...this.data, scaleX: 0.1};
          this.draw(this.data);
        }
      }
      else{
        this.c.style.cursor = "move";
      }
    }
  }

  // var enableDraw = false;



// @HostListener("mouseover", ["$event"]) public mouseover(event: MouseEvent) {
//   // event.preventDefault();
//   // event.stopPropagation();
//   let r = this.c.getBoundingClientRect();
//   this.mouse.x = event.clientX - r.left;
//   this.mouse.y = event.clientY - r.top;
//   // this.mouse.x = event.x;
//   // this.mouse.y = event.y;
//   console.log("x:", this.mouse.x, " y:", this.mouse.y)
//   if (this.mouse.x >= (100 - 20) && this.mouse.x <= (300 + 100) &&
//     this.mouse.y >= (100 - 50) && this.mouse.y <= (300 + 100)) {
//     this.c.style.cursor = "block"
//   }
// }


inputChange(data: ITextData) {
  this.data = data;
  this.draw(data);
}


draw(data: ITextData) {
  this.ctx.clearRect(0, 0, this.c.width, this.c.height);

  // this.ctx.fillText(data.value, 0,300);
  // if(typeof data.font != null)
  // {
  //   data.font.load().then(font => {
  //     (document as any).fonts.add(font);
  //     this.ctx.font = `bold  ${data.size}  ${font}`;
  //     this.ctx.shadowColor = "black";
  //     this.ctx.lineWidth = 8;
  //     this.ctx.strokeText(data.value,5, 154);
  //     this.ctx.shadowBlur = 0;
  //     this.ctx.fillStyle = data.color;
  //     this.ctx.fillText(data.value, 0,150);
  //   });
  // }
  // else
  {

    this.ctx.font = `bold  ${data.size}  ${data.font}`;
    // this.ctx.shadowColor = "white";

    this.ctx.shadowColor = "black";
    this.ctx.shadowBlur = 6;
    // this.ctx.shadowOffsetX = 20;
    // this.ctx.shadowOffsetY = 20;

    // this.ctx.strokeStyle = "#ffffff";
    // this.ctx.lineWidth = 20;

    //Get canvas center
    let centreX =  this.c.width / 2;
    let centreY =  this.c.height / 2;
    debugger
    //Get text width
    this.txtWidth = data.width != undefined ? data.width : this.ctx.measureText(data.value).width;

    //Setting offset to diplay text in center
    let offsetX = this.txtWidth/2;
    let offsetY = 32;
    let sX = data.scaleX == null && data.scaleX == undefined? 1: data.scaleX;
    let sY = data.scaleY == null && data.scaleY == undefined? 1: data.scaleY;
    this.ctx.scale(sX,sY);
    //Displaying text
    console.log("x:", centreX, " y:",centreY )
    this.ctx.strokeText(data.value, centreX - offsetX, centreY + offsetY);

    this.ctx.fillStyle = data.color;
    this.ctx.fillText(data.value, centreX - offsetX, centreY + offsetY);

    // Creating dash line rectangle around the text
    this.ctx.beginPath();
    this.ctx.setLineDash([20, 40]);
    // Setting offset so that "g" and "l" world displays within the rectangle
    let rectX = centreX - offsetX - 10;
    let rectY = centreY  - 50;
    this.ctx.strokeRect(rectX, rectY, this.txtWidth + 20, Number(data.size.split('p')[0]) + 4);
    this.ctx.closePath();

    // Getting other 3 corners of rectangle
    let rightTop = {
      x: rectX + this.txtWidth + 20,
      y: rectY,
    }
    let leftBottom = {
      x: rectX,
      y: rectY + Number(data.size.split('p')[0]) + 4,
    }
    this.rightBottom = {
      x: rectX + this.txtWidth + 20,
      y: rectY + Number(data.size.split('p')[0]) + 4,
      offsetX: 15,
      offsetY: 15,
    }

    //Instead of rectangle get to draw image
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.rightBottom.x - this.rightBottom.offsetX, this.rightBottom.y - this.rightBottom.offsetY, 20, 20)

  }


}

}