import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModuleModule } from '../shared-module/material-module.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { SignmakerComponent } from './signmaker/signmaker.component';
import { SignmakerNavBarComponent } from './signmaker-nav-bar/signmaker-nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShapesSideBarComponent } from './shapes-side-bar/shapes-side-bar.component';
import { ShapeComponent } from './shape/shape.component';



@NgModule({
  declarations: [SignmakerComponent,SignmakerNavBarComponent, ProductsComponent, ProductDetailsComponent,DesignComponent,
    ShapesSideBarComponent,ShapeComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,SharedModuleModule,MaterialModuleModule
  ]
})
export class ComponentsModuleModule { }
