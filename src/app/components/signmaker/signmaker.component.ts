import { Component, ViewChild } from '@angular/core';
import { ITextData } from 'src/app/interFace/Itext';
import { DesignComponent } from '../design/design.component';
import { SignmakerNavBarComponent } from '../signmaker-nav-bar/signmaker-nav-bar.component';

@Component({
  selector: 'app-signmaker',
  templateUrl: './signmaker.component.html',
  styleUrls: ['./signmaker.component.scss']
})
export class SignmakerComponent {
  // @ViewChild("nav") nav: SignmakerNavBarComponent;
  @ViewChild("design") design: DesignComponent;
  inputValue: string;


  // ngAfterViewInit() {
  //   this.nav.prdDtls.firstFormGroup.controls['firstCtrl'].valueChanges.subscribe(res => {
  //     this.inputValue = res;
  //     this.design.inputChange(res);
  //   });

  // }

  valueChange(val: ITextData) {
    this.design.inputChange(val);
  }
}
