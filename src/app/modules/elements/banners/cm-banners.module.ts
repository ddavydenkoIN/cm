import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBanner1Module } from './cm-banner1/cm-banner1.module';
import { CmBanner2Module } from "./cm-banner2/cm-banner2.module";
import { CmBanner3Module } from './cm-banner3/cm-banner3.module';

const BANNER_MODULES = [
  CmBanner1Module,
  CmBanner2Module,
  CmBanner3Module,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...BANNER_MODULES,
  ],
  exports: [...BANNER_MODULES],
})
export class CmBannersModule { }
