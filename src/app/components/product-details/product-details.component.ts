import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { IColor, Ifont, ITextData, IProduct, IShapes } from 'src/app/interface/Isignmaker';
import { MatStepper } from '@angular/material/stepper';
import { FaceArts } from 'src/app/constants/constants';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  unavailable: boolean = false;
  firstFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  isLinear: boolean;
  myfont: FontFace;
  data: ITextData = {
    value: "LETTERS",
    font: "Tahoma",
    size: "100",
    color: "red",
  };
  step: number = -1;

  fontArray: Array<Ifont> = [
    { name: "Tahoma", imgpath: "../../../assets/images/standard.png" },
    { name: "Serif", imgpath: "../../../assets/images/serifbold.png" },
    { name: "Brush Script MT", imgpath: "../../../assets/images/brush.png" },
    { name: "Freehand", imgpath: "../../../assets/images/freestyle.png" },
    { name: "Oswald", imgpath: "../../../assets/images/standard-condemed.png" },
    { name: "Varela Round ", imgpath: "../../../assets/images/standard-round.png" },
    { name: "Courier New", imgpath: "../../../assets/images/boxer.png" },
  ];

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

  @Input() selectedProduct: any;
  @Output() bckEvt = new EventEmitter<IProduct>();
  @Output() ValueChange = new EventEmitter<ITextData>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.data.product = this.selectedProduct;

    this.isLinear = false;
    this.edValueKeyPress();
  }

  exit() {
    this.selectedProduct.category = '';
    this.bckEvt.emit(this.selectedProduct);
  }

  fontSelect(value: string) {
    this.data.font = value;
    this.ValueChange.emit(this.data)
  }
  sizeSelect(value: string) {
    this.data.size = value;
    this.ValueChange.emit(this.data)
  }
  colorSelect(color: string, element: string) {
    this.data.faceImage = "";
    switch (element) {
      case "side": this.data.sideColor = color;
        break;
      case "stroke": this.data.boarderColor = color;
        break;
      case "shadow": this.data.shadowColor = color;
        break;
      case "race": this.data.raceColor = color;
        break;
      default: this.data.color = color;
    }

    this.ValueChange.emit(this.data)
  }

  imgSelect(element: string) {
    // const img = new Image();
    // img.onload = () => {
    //   this.data.faceImage = img;
    //   this.ValueChange.emit(this.data);
    // }
    // img.src = element;
    this.data.faceImage = element;
    this.ValueChange.emit(this.data);
  }

  edValueKeyPress() {
    this.firstFormGroup.controls['firstCtrl'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      this.data.value = res
      this.ValueChange.emit(this.data)
    })
  }

  completed(step: MatStepper) {
    step.reset();
    this.data.completed = true;
    this.ValueChange.emit(this.data);
    this.data = {
      value: "",
      font: "Tahoma",
      size: "100",
      color: "red",
    }
  }

  navigateToNextStep(step: MatStepper) {
    step.next();
  }

  selectedShape(shape: IShapes) {
    this.data.shapes = shape;
    let faceArts = FaceArts.faceArt[0].facearts?.filter(m => m.signgroup_id == shape.faceArtId);
    this.data.graphics = [];
    faceArts?.forEach(m => {
      this.data.graphics?.push({
        faceart_url: m.url??"",
        faceart_url_thumb: m.url_thumb??"",
        scale_x: 0.1,
        scale_y: 0.1,
        text: m.text?? "",
        font_name: m.font_name??"",
        font_size: m.font_size??20,
        font_style: m.font_style??"",
        position_x: m.position_x,
        position_y: m.position_y,
        color_hex: m.color_hex,
        opacity: Number(m.opacity),
        stack_order: m.stack_order
      })
    })
    this.ValueChange.emit(this.data);
  }
}
