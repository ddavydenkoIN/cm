import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmActionsContainerComponent } from './components/cm-actions-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CmActionsContainerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [CmActionsContainerComponent],
})
export class CmActionsContainerModule { }
