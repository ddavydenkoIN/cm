import { Component, OnInit } from '@angular/core';
import { CmPlaygroundFormService } from '../services/cm-playground-form.service';
import { takeUntil } from 'rxjs/operators';
import { CmUnsubscribe } from '../../../../../providers/abstract/cm-unsubscribe';
import { FormGroup } from '@angular/forms';
import { CmPlaygroundFormData } from '../../../../../models/playground';

@Component({
  selector: 'cm-playground-form',
  templateUrl: './cm-playground-form.component.html',
  styleUrls: ['./cm-playground-form.component.less']
})
export class CmPlaygroundFormComponent extends CmUnsubscribe implements OnInit {

  form: FormGroup;

  constructor(private playgroundFormService: CmPlaygroundFormService) {
    super();
  }

  ngOnInit(): void {
    this.playgroundFormService.getElementData()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(data => this.initForm(data));
  }

  private initForm(data: CmPlaygroundFormData): void {
    console.log(data);
  }

}
