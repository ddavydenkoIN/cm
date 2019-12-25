import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmErrorPageComponent } from './components/cm-error-page.component';

const routes: Routes = [
  {path: '', component: CmErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmErrorPageRoutingModule { }
