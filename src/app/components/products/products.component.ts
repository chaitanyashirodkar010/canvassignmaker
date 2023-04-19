import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/interface/Isignmaker';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Output() clickEvent = new EventEmitter<IProduct>;
  products: IProduct = {
    category: '',
    subCategory: '',
    type: '',
  }
  isAdd: boolean = false;
  toogleType: string = 'Acrylic Face';

  selectedProduct(value: string) {
    this.products.type = value;
    this.clickEvent.emit(this.products);
  }

  selectP(value: string) {
    this.products.subCategory = value;

  }
}
