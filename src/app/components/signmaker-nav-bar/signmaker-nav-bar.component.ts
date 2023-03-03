import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ITextData } from 'src/app/interface/Isignmaker';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-signmaker-nav-bar',
  templateUrl: './signmaker-nav-bar.component.html',
  styleUrls: ['./signmaker-nav-bar.component.scss']
})
export class SignmakerNavBarComponent {
  selectedProduct: string = "";
  @ViewChild("prdDtls") prdDtls: ProductDetailsComponent;
  @Output() ValueChange = new EventEmitter<ITextData>();

  products(value: string){
    this.selectedProduct = value;
  }

  prodDtls(val: boolean){
    this.selectedProduct = val ? '' : this.selectedProduct;
  }

  ValueChange1(value:ITextData){
    this.ValueChange.emit(value);
  }
}
