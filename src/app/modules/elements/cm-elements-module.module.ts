import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBannersModule } from './banners/cm-banners.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CmBannersModule,
  ],
  exports: [CmBannersModule],
})
export class CmElementsModuleModule { }
