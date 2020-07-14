import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmPlaygroundRoutingModule } from './cm-playground-routing.module';
import { CmBannersModule } from '../../elements/banners/cm-banners.module';
import { CmPlaygroundService } from './services/cm-playground.service';
import { CmResizableContainerModule } from '../../common/cm-resizable-container/cm-resizable-container.module';
import { CmPlaygroundPageComponent } from './cm-playground-page.component';
import { CmPlaygroundFormModule } from './modules/cp-playground-form.module';

@NgModule({
  declarations: [CmPlaygroundPageComponent],
  imports: [
    CommonModule,
    CmPlaygroundRoutingModule,
    CmResizableContainerModule,
    CmBannersModule,
    CmPlaygroundFormModule,
  ],
  providers: [CmPlaygroundService],
  exports: [CmPlaygroundPageComponent],
})
export class CmPlaygroundPageModule { }
