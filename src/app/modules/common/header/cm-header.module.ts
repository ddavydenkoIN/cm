import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmMaterialModule } from '../material/material.module';
import { CmHeaderComponent } from './components/cm-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CmMaterialModule,
    RouterModule,
  ],
  declarations: [
    CmHeaderComponent,
  ],
  exports: [
    CmHeaderComponent,
  ]
})
export class CmHeaderModule {

}
