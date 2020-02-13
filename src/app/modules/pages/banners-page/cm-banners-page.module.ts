import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBannersPageComponent } from './components/cm-banners-page.component';
import { BANNERS_MAP, CmBannersModule } from '../../elements/banners/cm-banners.module';
import { CmBannersRoutingModule } from './cm-banners-routing.module';
import { CmActionsContainerModule } from '../../common/actions-container/cm-actions-container.module';
import { CmBannersPageService } from './services/banners-page.service';

@NgModule({
  declarations: [CmBannersPageComponent],
  entryComponents: [...Object.values(BANNERS_MAP)],
  imports: [
    CommonModule,
    CmBannersModule,
    CmBannersRoutingModule,
    CmActionsContainerModule,
  ],
  providers: [CmBannersPageService],
  exports: [CmBannersPageComponent],
})
export class CmBannersPageModule { }
