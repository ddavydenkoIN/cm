import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBanner1Module } from './cm-banner1/cm-banner1.module';
import { CmBanner2Module } from "./cm-banner2/cm-banner2.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CmBanner1Module,
    CmBanner2Module,
  ],
  exports: [
    CmBanner1Module,
    CmBanner2Module,
  ],
})
export class CmBannersModule { }
