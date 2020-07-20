import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CmPlaygroundFormComponent } from './components/cm-playground-form.component';
import { CmPlaygroundFormService } from './services/cm-playground-form.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [CmPlaygroundFormComponent],
  providers: [CmPlaygroundFormService],
  exports: [CmPlaygroundFormComponent],
})
export class CmPlaygroundFormModule {

}
