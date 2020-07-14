import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmResizableContainerComponent } from './components/cm-resizable-container.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { MatIconModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CmResizableContainerComponent],
  exports: [
    CmResizableContainerComponent
  ],
  imports: [
    CommonModule,
    AngularDraggableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class CmResizableContainerModule { }
