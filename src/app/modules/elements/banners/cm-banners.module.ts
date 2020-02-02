import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBanner1Module } from './cm-banner1/cm-banner1.module';
import { CmBanner2Module } from "./cm-banner2/cm-banner2.module";
import { CmBanner3Module } from './cm-banner3/cm-banner3.module';
import { CmBanner4Module } from './cm-banner4/cm-banner4.module';
import { CmBanner5Module } from "./cm-banner5/cm-banner5.module";
import { CmBanner6Module } from './cm-banner6/cm-banner6.module';
import { CmBanner7Module } from './cm-banner7/cm-banner7.module';

const BANNER_MODULES = [
  CmBanner1Module,
  CmBanner2Module,
  CmBanner3Module,
  CmBanner4Module,
  CmBanner5Module,
  CmBanner6Module,
  CmBanner7Module,
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
