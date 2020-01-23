import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBanner1Component } from './cm-banner1.component';

@NgModule({
  declarations: [CmBanner1Component],
  imports: [
    CommonModule
  ],
  exports: [CmBanner1Component]
})
export class CmBanner1Module { }
