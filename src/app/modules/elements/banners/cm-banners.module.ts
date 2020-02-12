import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBanner1Module } from './cm-banner1/cm-banner1.module';
import { CmBanner2Module } from "./cm-banner2/cm-banner2.module";
import { CmBanner3Module } from './cm-banner3/cm-banner3.module';
import { CmBanner4Module } from './cm-banner4/cm-banner4.module';
import { CmBanner5Module } from "./cm-banner5/cm-banner5.module";
import { CmBanner6Module } from './cm-banner6/cm-banner6.module';
import { CmBanner7Module } from './cm-banner7/cm-banner7.module';
import { CmBanner8Module } from './cm-banner8/cm-banner8.module';
import { CmBanner1Component } from "./cm-banner1/cm-banner1.component";
import { CmBanner7Component } from "./cm-banner7/cm-banner7.component";
import { CmBanner8Component } from "./cm-banner8/cm-banner8.component";
import { CmBanner6Component } from "./cm-banner6/cm-banner6.component";
import { CmBanner5Component } from "./cm-banner5/cm-banner5.component";
import { CmBanner4Component } from "./cm-banner4/cm-banner4.component";
import { CmBanner3Component } from "./cm-banner3/cm-banner3.component";
import { CmBanner2Component } from "./cm-banner2/cm-banner2.component";
import { CmBanner9Module } from "./cm-banner9/cm-banner9.module";
import { CmBanner9Component } from "./cm-banner9/cm-banner9.component";
import { CmBanner10Component } from "./cm-banner10/cm-banner10.component";
import { CmBanner10Module } from "./cm-banner10/cm-banner10.module";
import { CmBanner11Module } from "./cm-banner11/cm-banner11.module";
import { CmBanner11Component } from "./cm-banner11/cm-banner11.component";
import { CmBanner12Component } from './cm-banner12/cm-banner12.component';
import { CmBanner12Module } from './cm-banner12/cm-banner12.module';

const BANNER_MODULES = [
  CmBanner1Module,
  CmBanner2Module,
  CmBanner3Module,
  CmBanner4Module,
  CmBanner5Module,
  CmBanner6Module,
  CmBanner7Module,
  CmBanner8Module,
  CmBanner9Module,
  CmBanner10Module,
  CmBanner11Module,
  CmBanner12Module,
];

export const BANNERS_LIST = [
  CmBanner1Component,
  CmBanner2Component,
  CmBanner3Component,
  CmBanner4Component,
  CmBanner5Component,
  CmBanner6Component,
  CmBanner7Component,
  CmBanner8Component,
  CmBanner9Component,
  CmBanner10Component,
  CmBanner11Component,
  CmBanner12Component,
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
