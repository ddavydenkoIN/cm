import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBanner1Module } from './cm-banner1/cm-banner1.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CmBanner1Module,
  ],
  exports: [CmBanner1Module],
})
export class CmBannersModule { }
