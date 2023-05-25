import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsDetails } from 'src/app/constants/product';
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
  description: string = '';
  features: Array<any> = [];
  ProductsList: Array<any> = [];
  selectedFeature:any;
  title: string = "";
  isOptional: boolean = false;

  selectedProduct(value: any) {
    // this.products.type = value;
    // ProductsDetails.products.find(m => m.title == this.products.subCategory);
    this.clickEvent.emit(value);
  }

  selectP(value: string) {
    this.products.subCategory = value;

  }

  getProductfeatures(){
    let prod = ProductsDetails.products.find(m => m.title == this.products.subCategory);
    
    if(prod){
      this.description = prod?.description??"";
      this.title =  prod?.title;
      this.features = ProductsDetails.productsFeatures.filter(m => m.product_id == prod?.id);
      this.selectedFeature = (this.features?.length??0) > 0 ? this.features[0] : null;
      this.isOptional = this.features.some(m => m.status == 'Optional');

      let pr;
      if(prod.parent_id == null){
        pr = ProductsDetails.productsDtls.filter(m => m.title == this.products.subCategory);
      }
      else{
        pr = ProductsDetails.productsDtls.filter(m => m.parent_id == prod?.parent_id);
      }
      
      if(pr && pr.length > 0 && !this.ProductsList.some(m => m.parent_id == prod?.parent_id)){
        pr.sort((a,b) => {return a.id - b.id});
        this.ProductsList.push(...pr);
      }
    }
  }

  getImg(){
    if(this.selectedFeature)
      return "https://storage.googleapis.com/signmonkey-148101.appspot.com/" + this.selectedFeature?.preview_url??'';
    return "";
  }

  getSelImg(FolderName: any){
    return "https://storage.googleapis.com/signmonkey-148101.appspot.com/2020/products/" + FolderName + "/icon.jpg";
  }
}
