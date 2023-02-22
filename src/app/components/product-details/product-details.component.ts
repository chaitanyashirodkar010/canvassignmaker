import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { IColor, Ifont, ITextData } from 'src/app/interface/Isignmaker';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear: boolean;
  myfont: FontFace;
  data: ITextData = {
    value: "Naik",
    font: "sans-serif",
    size: "100px",
    color: "red",
  };

  fontArray: Array<Ifont> = [
    {name: "Tahoma", imgpath: "../../../assets/images/standard.png"},
    {name: "Serif", imgpath: "../../../assets/images/serifbold.png"},
    {name: "Brush Script MT", imgpath: "../../../assets/images/brush.png"},
    {name: "Freehand", imgpath: "../../../assets/images/freestyle.png"},
    {name: "Oswald", imgpath: "../../../assets/images/standard-condemed.png"},
    {name: "Varela Round ", imgpath: "../../../assets/images/standard-round.png"},
    {name: "Courier New", imgpath: "../../../assets/images/boxer.png"},
  ];

  colorArray: Array<IColor> = [
    {name: "green"},
    {name: "red"},
    {name: "blue"},
    {name: "yellow"},
    {name: "purple"},
  ];
  
  @Output() bckEvt = new EventEmitter<boolean>();
  @Output() ValueChange = new EventEmitter<ITextData>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(){
    // myFont = new FontFace('myFont', 'url(Praise-Regular.ttf)');
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.isLinear = false;
    this.edValueKeyPress();
  }

  exit(){
    this.bckEvt.emit(true);
  }

  fontSelect(value: string){
    // let myFont: any;
    // debugger
    // if(value == "1"){
    //   myFont = new FontFace('myFont', 'url(../assets/Praise-Regular.ttf)');
    // }
    // else if(value == "2"){
    //   myFont = new FontFace('freeStyleFont', 'url(../assets/BullettoKilla.ttf)');
    // }
    // else if(value == "3"){
    //   myFont = "italic serif";
    // }
    // else{
    //   myFont = "Arial"
    // }
    // var freeStyleFont = new FontFace('freeStyleFont', 'url(BullettoKilla.ttf)');
    this.data.font = value;
    // this.data.font = new FontFace('myFont', 'url(Praise-Regular.ttf)');
    this.ValueChange.emit(this.data)
  }
  sizeSelect(value: string){
    this.data.size = value;
    // this.data.font = new FontFace('myFont', 'url(Praise-Regular.ttf)');
    this.ValueChange.emit(this.data)
  }
  colorSelect(color:string){
    this.data.color = color;
    // this.data.font = new FontFace('myFont', 'url(Praise-Regular.ttf)');
    this.ValueChange.emit(this.data)
  }

  edValueKeyPress(){
    this.firstFormGroup.controls['firstCtrl'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      this.data.value = res
      this.ValueChange.emit(this.data)
    })
  }
}
