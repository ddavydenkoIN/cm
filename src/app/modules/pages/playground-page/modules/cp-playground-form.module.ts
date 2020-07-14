import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CmPlaygroundFormComponent } from './components/cm-playground-form.component';
import { CmPlaygroundFormService } from './services/cm-playground-form.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [CmPlaygroundFormComponent],
  providers: [CmPlaygroundFormService],
  exports: [CmPlaygroundFormComponent],
})
export class CmPlaygroundFormModule {

}
