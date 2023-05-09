import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { TextArtFilterComponent } from './text-art-filter/text-art-filter.component';
import { ShapeFilterComponent } from './shape-filter/shape-filter.component';



@NgModule({
  declarations: [TextFilterComponent,TextArtFilterComponent,ShapeFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [TextFilterComponent,TextArtFilterComponent,ShapeFilterComponent]
})
export class FilterComponentsModule { }
