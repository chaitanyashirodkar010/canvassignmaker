import { Component, HostListener, Input } from '@angular/core';
import { ITextData } from 'src/app/interface/Isignmaker';

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

  ngOnInit() {
    this.c = document.getElementById("exampleCanvas");
    this.ctx = this.c.getContext("2d");

    this.c.width = window.innerWidth;
    this.c.height = window.innerHeight;
    // this.c.height = "110";
    this.c.style.cursor = "move";
    this.data = {
      value: "LETTERS",
      font: "Tahoma",
      size: "100px",
      color: "orange",
      x: this.c.width / 2,
      y: 75,
    };
    this.draw(this.data);
  }

  @HostListener("mousedown", ["$event"]) public mousedown(event: MouseEvent) {
    this.enableDraw = true;
  };

  @HostListener("mouseup", ["$event"]) public mouseup(event: MouseEvent) {
    this.enableDraw = false;
  };

  @HostListener("mousemove", ["$event"]) public mousemove(event: MouseEvent) {
    {

      let r = this.c.getBoundingClientRect();

      this.mouse.x = event.clientX - r.left;
      this.mouse.y = event.clientY - r.top;

      //Close Icon
      if (this.mouse.x >= ((this.data.corners?.rightTop.x ?? 0) - (this.data.corners?.rightTop.offsetX ?? 0)) &&
        this.mouse.x <= ((this.data.corners?.rightTop.x ?? 0) - (this.data.corners?.rightTop.offsetX ?? 0) + 20) &&
        this.mouse.y >= ((this.data.corners?.rightTop.y ?? 0) - (this.data.corners?.rightTop.offsetY ?? 0))
        && this.mouse.y <= ((this.data.corners?.rightTop.y ?? 0) - (this.data.corners?.rightTop.offsetY ?? 0) + 20)) {
        this.c.style.cursor = "pointer";
        if (this.click) {

          this.draw(null);
        }
        this.click = false;
        return;
      }

      //Expand
      // console.log(this.data.corners)
      if (this.mouse.x >= ((this.data.corners?.rightBottom.x ?? 0) - (this.data.corners?.rightBottom.offsetX ?? 0)) &&
        this.mouse.x <= ((this.data.corners?.rightBottom.x ?? 0) - (this.data.corners?.rightBottom.offsetX ?? 0) + 20) &&
        this.mouse.y >= ((this.data.corners?.rightBottom.y ?? 0) - (this.data.corners?.rightBottom.offsetY ?? 0))
        && this.mouse.y <= ((this.data.corners?.rightBottom.y ?? 0) - (this.data.corners?.rightBottom.offsetY ?? 0) + 20)) {
        this.c.style.cursor = "nw-resize"
        if (this.enableDraw) {
          // var scalex = ((this.data.x ?? 0) / (this.rectOX));
          var scaley = (this.mouse.x / (this.rectOY * 10));

          // var ypos = (this.data.y ?? 0 / (scaley * 1.25));
          this.mouse.y / this.mouse.x
          this.data = {
            ...this.data, scaleX: 1, scaleY: scaley,
            skewY: 0
          };
          this.draw(this.data);
          // this.enableDraw = false
          return;
        }
      }
      else {
        this.c.style.cursor = "move";
      }

      // if (this.mouse.x >= (this.data.corners?.leftTop.x ?? 0) && this.mouse.x <= (this.data.corners?.rightBottom.x ?? 0) &&
      //   this.mouse.y >= (this.data.corners?.leftTop.y ?? 0) && this.mouse.y <= (this.data.corners?.rightBottom.y ?? 0)) {
      //   this.data = { ...this.data, x: this.mouse.x, y: this.mouse.y };
      //   // this.draw(this.data);
      //   this.c.style.cursor = "move";
      // } else {
      //   this.c.style.cursor = "context-menu";
      // }

      //Drag n Drop
      if (this.enableDraw) {
        let offsetX = this.txtWidth / 2;
        let offsetY = 32;
        let rectX = this.data.corners?.leftTop.x ?? 0;
        let rectY = this.data.corners?.leftTop.y ?? 0;

        if (this.mouse.x >= rectX && this.mouse.x <= (this.data.corners?.rightBottom.x ?? 0) &&
          this.mouse.y >= rectY && this.mouse.y <= (this.data.corners?.rightBottom.y ?? 0)) {
          this.data = { ...this.data, x: this.mouse.x, y: this.mouse.y };
          this.draw(this.data);
        }

      }
    }
  }



  @HostListener("click", ["$event"]) public onClick(event: MouseEvent) {
    if (this.mouse.x >= ((this.data.corners?.rightTop.x ?? 0) - (this.data.corners?.rightTop?.offsetX ?? 0)) && this.mouse.x <=
      ((this.data.corners?.rightTop?.x ?? 0) - (this.data.corners?.rightTop?.offsetX ?? 0) + 20) &&
      this.mouse.y >= ((this.data.corners?.rightTop?.y ?? 0) - (this.data.corners?.rightTop?.offsetY ?? 0)) &&
      this.mouse.y <= ((this.data.corners?.rightTop?.y ?? 0) - (this.data.corners?.rightTop?.offsetY ?? 0) + 20)) {
      this.click = true;
      return;
    }
    this.click = false;
  }

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
    let { x, y } = this.data;
    this.data = data;
    this.data.x = x;
    this.data.y = y;
    this.draw(data);
  }


  draw(data: ITextData | null) {
    // this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    const img = new Image(); // Create new img element

    img.onload = () => {
      // this.ctx.save();
      this.ctx.drawImage(img, 0, 0, this.c.width, this.c.height);

      // console.log(data.scaleY, data.scaleX)
      if (data != null && data.value != '') {
        // this.ctx.save();
        // this.ctx.transform(.8, 0, 0, .8, 0, 0);
        // this.ctx.transform((data.scaleY ?? 1), 0, 0, (data.scaleX ?? 1), 0, 0);


        this.ctx.font = `bold  ${data.size}  ${data.font}`;
        //Get canvas center
        let centreX = data.x != null && data.x != undefined ? data.x : this.c.width / 2;
        let centreY = data.y != null && data.y != undefined ? data.y : 75;

        //Get text width
        this.txtWidth = data.width != undefined ? data.width : this.ctx.measureText(data.value).width;

        //Setting offset to diplay text in center
        let offsetX = this.txtWidth / 2;
        let offsetY = 32;
        // let sX = data.scaleX == null && data.scaleX == undefined ? 1 : data.scaleX;
        // let sY = data.scaleY == null && data.scaleY == undefined ? 1 : data.scaleY;

        // this.ctx.scale(sX, sY);
        //Displaying text

        // Displaying Race
        // Setting offset so that "g" and "l" world displays within the rectangle
        let rectX = centreX - offsetX - 10;
        let rectY = centreY - 50;
        if (data.raceColor != undefined && data.raceColor != null) {
          this.ctx.save();
          this.ctx.fillStyle = "black";
          this.ctx.fillRect(rectX + 1, ((rectY + Number(data.size.split('p')[0]) + 5 + rectY - 20) / 2) + 1, this.txtWidth + 32, 20);
          this.ctx.fillRect(rectX + 2, ((rectY + Number(data.size.split('p')[0]) + 5 + rectY - 20) / 2) + 2, this.txtWidth + 32, 20);
          this.ctx.fillRect(rectX + 3, ((rectY + Number(data.size.split('p')[0]) + 5 + rectY - 20) / 2) + 3, this.txtWidth + 32, 20);
          this.ctx.fillStyle = data.raceColor;
          this.ctx.fillRect(rectX, (rectY + Number(data.size.split('p')[0]) + 5 + rectY - 20) / 2, this.txtWidth + 32, 20);
          this.ctx.restore();
        }



        this.ctx.save();
        // Shadow
        for (let i = 0; i < 7; i++) {
          if (data.shadowColor != undefined && data.shadowColor != null) {
            this.ctx.shadowColor = data.shadowColor;
            this.ctx.shadowBlur = 13;
            // for (let i = 0; i < 7; i++) {
            // this.ctx.shadowOffsetX = i;
            // this.ctx.shadowOffsetY = i;
            // }
          }
          this.ctx.fillStyle = data.sideColor ?? "Black";
          this.ctx.fillText(data.value, centreX - offsetX + i, centreY + offsetY + i);
        }
        // boarder/storke
        for (let i = 0; i < 3; i++) {
          this.ctx.fillStyle = data.boarderColor ?? "Black";
          this.ctx.fillText(data.value, centreX - offsetX + i, centreY + offsetY + i);
        }
        //text face

        // this.ctx.beginPath();
        if (data.faceImage) {
          const pattern = this.ctx.createPattern(data.faceImage, 'repeat');
          this.ctx.fillStyle = pattern ?? "";
        }
        else {
          this.ctx.fillStyle = data.color ?? "";
        }

        this.ctx.fillText(data.value, centreX - offsetX, centreY + offsetY);
        this.ctx.fill();

        // this.ctx.beginPath();
        // this.ctx.globalCompositeOperation = "source-in";
        // this.ctx.drawImage(img1, 0, 0);
        // this.ctx.closePath();
        // this.ctx.restore();

        this.ctx.restore();

        // Creating dash line rectangle around the text
        this.ctx.save();
        this.ctx.setLineDash([7, 7]);
        // let rectX = centreX - offsetX - 10;
        // let rectY = centreY - 50;
        if (this.rectOX == undefined || this.rectOX == null) {
          this.rectOX = rectX;
        }
        if (this.rectOY == undefined || this.rectOY == null) {
          this.rectOY = rectY;
        }
        this.ctx.strokeRect(rectX, rectY, this.txtWidth + 32, Number(data.size.split('p')[0]) + 5);

        this.ctx.restore();

        // Getting all corners of rectangle
        data.corners = {
          rightTop: {
            x: rectX + this.txtWidth + 32,
            y: rectY,
            offsetX: 15,
            offsetY: 15,
          },
          leftTop: {
            x: rectX,
            y: rectY,
            offsetX: 15,
            offsetY: 15,
          },
          rightBottom: {
            x: rectX + this.txtWidth + 32,
            y: rectY + Number(data.size.split('p')[0]) + 5,
            offsetX: 15,
            offsetY: 15,
          },
          leftBottom: {
            x: rectX,
            y: rectY + Number(data.size.split('p')[0]) + 5,
            offsetX: 15,
            offsetY: 15,
          }
        }
        //Instead of rectangle get to draw image
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(data.corners.leftTop.x - data.corners.leftTop.offsetX,
          data.corners.leftTop.y - data.corners.leftTop.offsetY, 20, 20)

        //Instead of rectangle get to draw image
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(data.corners.rightBottom.x - data.corners.rightBottom.offsetX,
          data.corners.rightBottom.y - data.corners.rightBottom.offsetY, 20, 20)
        // this.ctx.restore();

        //Instead of rectangle get to draw image
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(data.corners.rightTop.x - data.corners.rightTop.offsetX,
          data.corners.rightTop.y - data.corners.rightTop.offsetY, 20, 20)
        // this.ctx.restore();

      }

    }
    img.src = "../assets/images/banner.png";

  }

}
