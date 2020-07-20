import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmHomePageComponent } from './components/cm-home-page.component';
import { CmHomePageRoutingModule } from './cm-home-page-routing.module';



@NgModule({
  declarations: [CmHomePageComponent],
  imports: [
    CommonModule,
    CmHomePageRoutingModule,
  ],
  exports: [
    CmHomePageComponent,
  ]
})
export class CmHomePageModule { }
