import { Component, EventEmitter, Output } from '@angular/core';
import { IColor } from 'src/app/interface/Isignmaker';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {

  @Output() ValueChange = new EventEmitter<any>();
  data: any = {};
  unavailable: boolean = false;
  colorArray: Array<IColor> = [
    { name: "rgb(249, 214, 22)" },
    { name: "rgb(0, 140, 66)" },
    { name: "rgb(148, 46, 181)" },
    { name: "rgb(223, 185, 122)" },
    { name: "rgb(0, 51, 127)" },
    { name: "rgb(0, 114, 114)" },
    { name: "rgb(170, 0, 79)" },
    { name: "rgb(192, 192, 192)" },
    { name: "rgb(0, 83, 62)" },
    { name: "rgb(255, 158, 27)" },
    { name: "rgb(235, 111, 189)" },
    { name: "rgb(255, 198, 30)" },
    { name: "rgb(127, 186, 0)" },
    { name: "rgb(184, 97, 37)" },
    { name: "rgb(242, 125, 0)" },
    { name: "rgb(0, 150, 94)" },
    { name: "rgb(255, 0, 153)" },
  ];


  colorSelect(color: string, element: string) {
    // this.data.faceImage = "";
    switch (element) {
      case "side": this.data["sideColor"] = color;
        break;
      case "stroke": this.data["boarderColor"] = color;
        break;
      case "shadow": this.data["shadowColor"] = color;
        break;
      case "race": this.data["raceColor"] = color;
        break;
      default: this.data["color"] = color;
    }

    this.ValueChange.emit(this.data)
  }

}
