import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Output() clickEvent = new EventEmitter<string>;

  selectedProduct(value: string) {
    this.clickEvent.emit(value);
  }
}
