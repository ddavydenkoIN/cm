import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBannersPageComponent } from './components/cm-banners-page.component';
import { CmBannersModule } from '../../elements/banners/cm-banners.module';
import { CmBannersRoutingModule } from './cm-banners-routing.module';
import { CmActionsContainerModule } from '../../common/actions-container/cm-actions-container.module';

@NgModule({
  declarations: [CmBannersPageComponent],
  imports: [
    CommonModule,
    CmBannersModule,
    CmBannersRoutingModule,
    CmActionsContainerModule
  ],
  exports: [CmBannersPageComponent],
})
export class CmBannersPageModule { }
