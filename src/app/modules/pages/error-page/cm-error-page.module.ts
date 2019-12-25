import { NgModule } from '@angular/core';

import { CmErrorPageRoutingModule } from './cm-error-page-routing.module';
import { CmErrorPageComponent } from './components/cm-error-page.component';
import {CmTranslateModule} from '../../translate/cm-translate.module';

@NgModule({
    imports: [
        CmTranslateModule,
        CmErrorPageRoutingModule
    ],
    declarations: [CmErrorPageComponent]
})
export class CmErrorPageModule {}
