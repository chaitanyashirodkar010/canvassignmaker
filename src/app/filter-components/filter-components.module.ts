import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { TextArtFilterComponent } from './text-art-filter/text-art-filter.component';
import { ShapeFilterComponent } from './shape-filter/shape-filter.component';
import { MaterialModuleModule } from '../shared-module/material-module.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ColorComponent } from './color/color.component';



@NgModule({
  declarations: [TextFilterComponent,TextArtFilterComponent,ShapeFilterComponent, ColorComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    SharedModuleModule
  ],
  exports: [TextFilterComponent,TextArtFilterComponent,ShapeFilterComponent,ColorComponent]
})
export class FilterComponentsModule { }
