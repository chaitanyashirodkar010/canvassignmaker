import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ITextData } from 'src/app/interFace/Itext';

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
    value: "",
    font:  "Arial",
    size: "120px",
    color: "",
  };
  
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
    let myFont: any;
    debugger
    if(value == "1"){
      myFont = new FontFace('myFont', 'url(Praise-Regular.ttf)').family;
    }
    else if(value == "2"){
      myFont = new FontFace('freeStyleFont', 'url(BullettoKilla.ttf)').family;
    }
    else{
      myFont = "Arial"
    }
    // var freeStyleFont = new FontFace('freeStyleFont', 'url(BullettoKilla.ttf)');
    this.data.font = myFont;
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
