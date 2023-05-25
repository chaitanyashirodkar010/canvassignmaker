import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { fabric } from 'fabric';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent {

  @Input() selectedObject: fabric.Object | undefined;
  @Output() textEmitter = new EventEmitter<any>();
  data: any = {};

  textForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
    this.initTypeAhead();
  }

  initForm() {
    this.textForm = this.fb.group({
      newText: [''],
      fontFamily: [''],
      outLine: [0],
      shadow: [0],
      opacity: [0],
      lineHeight: [0],
      fontStyle: [''],
      fontAlign: ['']
    })
  }

  initTypeAhead() {
    this.textForm.controls['newText'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      if (this.selectedObject) {
        this.data['text'] = res
        this.textEmitter.emit(this.data)
      }
    });
    this.textForm.controls['outLine'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      if (this.selectedObject) {
        this.selectedObject.set({
          strokeWidth: res
        });
        this.data['strokeWidth'] = res;
        this.data['stroke'] = "black";
        this.textEmitter.emit(this.data);
      }
    });
    this.textForm.controls['opacity'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      if (this.selectedObject) {
        // this.selectedObject.get(text)
        this.selectedObject.set({
          opacity: res
        });
        this.data['opacity'] = res;
        this.textEmitter.emit(this.data);
      }
    });
    this.textForm.controls['lineHeight'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      if (this.selectedObject) {
        // this.selectedObject.get(text)
        // this.selectedObject.set(new fabric.Text());
        this.data['lineHeight'] = res;
        this.textEmitter.emit(this.data);
      }
    });
    this.textForm.controls['shadow'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      if (this.selectedObject) {
        // this.selectedObject.get(text)
        // this.selectedObject.set('shadow', { blur: 15, offsetX: 0, offsetY: 0});
        // Create shadow object 
        var shadow = new fabric.Shadow({
          color: 'black',
          // blur: res
          offsetX: res,
          offsetY: res,
        });
        this.data['shadow'] = shadow;
        this.textEmitter.emit(this.data);
      }
    });
  }

  formatLabel(value: any): string {
    // debugger
    // if (value >= 1000) {
    //   return Math.round(value / 1000) + 'k';
    // }
    // console.log("actual",this.textForm.controls[type].value, 'changed');
    return `${value}`;
  }

  AddNewText() {
    this.textEmitter.emit({ isNewText: true });
  }


}
