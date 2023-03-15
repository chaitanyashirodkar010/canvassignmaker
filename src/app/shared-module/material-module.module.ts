import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatStepperModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatListModule,
    MatExpansionModule,MatDialogModule
  ],
  exports: [
    MatSidenavModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatListModule,MatExpansionModule,
    MatDialogModule
  ]
})
export class MaterialModuleModule { }
