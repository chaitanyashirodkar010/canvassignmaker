import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IProduct, ITextData } from 'src/app/interface/Isignmaker';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-signmaker-nav-bar',
  templateUrl: './signmaker-nav-bar.component.html',
  styleUrls: ['./signmaker-nav-bar.component.scss']
})
export class SignmakerNavBarComponent {
  selectedProduct: IProduct = {
    category: '',
    subCategory: '',
    type: '',
  };
  @ViewChild("prdDtls") prdDtls: ProductDetailsComponent;
  @ViewChild("close") close: ElementRef;

  @Output() ValueChange = new EventEmitter<ITextData>();

  products(value: IProduct){
    this.selectedProduct = value;
  }

  prodDtls(selectedProduct: IProduct){
    this.selectedProduct = selectedProduct;
  }

  ValueChange1(value:ITextData){
    if(value.completed){
      this.close.nativeElement.click();
    }
    this.ValueChange.emit(value);
  }
}
