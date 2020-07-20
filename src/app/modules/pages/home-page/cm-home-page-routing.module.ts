import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CmHomePageComponent } from './components/cm-home-page.component';

const homeRouting: Routes = [{
  path: '',
  component: CmHomePageComponent,
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouting),
  ]
})
export class CmHomePageRoutingModule { }
