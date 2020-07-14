import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBannersPageComponent } from './components/cm-banners-page.component';
import { BANNERS_MAP, CmBannersModule } from '../../elements/banners/cm-banners.module';
import { CmBannersRoutingModule } from './cm-banners-routing.module';
import { CmActionsContainerModule } from '../../common/actions-container/cm-actions-container.module';
import { EffectsModule } from '@ngrx/effects';
import { CmBannersEffects } from './store/banners.effects';

@NgModule({
  declarations: [CmBannersPageComponent],
  entryComponents: [...Object.values(BANNERS_MAP)],
  imports: [
    CommonModule,
    CmBannersModule,
    CmBannersRoutingModule,
    CmActionsContainerModule,
    EffectsModule.forFeature([CmBannersEffects]),
  ],
  providers: [],
  exports: [CmBannersPageComponent],
})
export class CmBannersPageModule { }
