import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CmBannersPageComponent } from './components/cm-banners-page.component';

const bannersRouting: Routes = [{
    path: '',
    component: CmBannersPageComponent,
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(bannersRouting),
  ]
})
export class CmBannersRoutingModule { }
