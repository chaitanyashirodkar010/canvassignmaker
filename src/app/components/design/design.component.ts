import { Component, Input } from '@angular/core';
import { ITextData } from 'src/app/interFace/Itext';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {

  c: any;
  ctx: any;
  text: string;

  ngOnInit() {
    this.c = document.getElementById("exampleCanvas");
    this.ctx = this.c.getContext("2d");

    this.c.width = 3000;
    this.c.height = window.innerHeight;
    this.draw({  value: "Naik",
    font: "Tahoma",
    size: "600px",
    color: "red"});
    // console.log(c);
    console.log(window.innerHeight);
  }




  inputChange(data: ITextData) {
    // this.text = text
    this.draw(data);
  }

  // ctx.moveTo(0, 0);
  // ctx.lineTo(200, 100);
  // ctx.lineTo(300, 400);
  // ctx.lineTo(40, 40);
  // ctx.lineTo(700, 100);
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.arc(c.width/2, c.height/2, 40, 0, 2 * Math.PI);
  // ctx.stroke();
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
      this.ctx.shadowOffsetX = 20;
      this.ctx.shadowOffsetY = 20;

      this.ctx.strokeStyle = "#ffffff";
      this.ctx.lineWidth = 20;
      this.ctx.strokeText(data.value,900, 540);
    
      this.ctx.fillStyle = data.color;
      this.ctx.fillText(data.value, 900,540);
    }

    
  }

}
