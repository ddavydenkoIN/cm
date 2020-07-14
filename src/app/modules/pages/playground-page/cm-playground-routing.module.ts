import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CmPlaygroundPageComponent } from './cm-playground-page.component';

const playgroundRouting: Routes = [{
  path: '',
  component: CmPlaygroundPageComponent,
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(playgroundRouting),
  ]
})
export class CmPlaygroundRoutingModule { }
