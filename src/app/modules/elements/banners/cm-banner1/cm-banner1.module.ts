import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBanner1Component } from './cm-banner1.component';
import { CmTranslateModule } from "../../../translate/cm-translate.module";

@NgModule({
  declarations: [CmBanner1Component],
  imports: [
    CommonModule,
    CmTranslateModule,
  ],
  exports: [CmBanner1Component]
})
export class CmBanner1Module { }
