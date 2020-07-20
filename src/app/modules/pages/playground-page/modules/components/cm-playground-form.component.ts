import { Component, OnInit } from '@angular/core';
import { CmPlaygroundFormService } from '../services/cm-playground-form.service';
import { takeUntil } from 'rxjs/operators';
import { CmUnsubscribe } from '../../../../../providers/abstract/cm-unsubscribe';
import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { CmPlaygroundFormData, CmPlaygroundFormField } from '../../../../../models/playground';
import { CmFormFieldNodeType, CmInputType } from '../../../../../enums/playground';

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
    this.form = new FormGroup({
      base: new FormArray(this.buildFormArray(data.fields)),
    });
    console.log(data);
    console.log(this.form);
  }

  private buildFormArray(fields: CmPlaygroundFormField[]): AbstractControl[] {
    return fields.map((field: CmPlaygroundFormField) => {
      return field.nodeType === CmFormFieldNodeType.PARENT
        ? new CmPlaygroundFormArray(this.buildFormArray(field.children), null, null, field.name)
        : new CmPlaygroundFormControl(field.value, null, null, field.inputType, field.name);
    });
  }
}
export class CmPlaygroundFormArray extends FormArray {
  name: string;

  constructor(controls: AbstractControl[],
              validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
              fieldName?: string) {
    super(controls, validatorOrOpts, asyncValidator);
    this.name = fieldName;
  }

}
export class CmPlaygroundFormControl extends FormControl {
  public name: string;
  public type: CmInputType;

  constructor(
    formState?: any,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
    fieldType?: CmInputType,
    fieldName?: string
  ) {
    super(formState, validatorOrOpts, asyncValidator);
    this.type = fieldType || CmInputType.TEXT_FIELD;
    this.name = fieldName;
  }

}
