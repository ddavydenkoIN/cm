import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmActionsContainerComponent } from './components/cm-actions-container.component';

@NgModule({
  declarations: [CmActionsContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [CmActionsContainerComponent],
})
export class CmActionsContainerModule { }
