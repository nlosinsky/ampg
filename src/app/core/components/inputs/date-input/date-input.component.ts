import { Component, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  Validator,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';

import { validateDateFormat } from '../../../validators';

@Component({
  selector: 'date-input',
  templateUrl: 'date-input.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor, Validator {
  date: string;
  validObj: Object;

  constructor(
      private cd: ChangeDetectorRef
  ) {}

  writeValue(value: any): void {
    if (value !== undefined) {
      this.date = value;
      this.cd.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  };

  onChange({ target }: { target: HTMLInputElement }): void {
    this.propagateChange(target.value);
    this.propagateTouch();
  }

  onBlur({ target }: { target: HTMLInputElement }): void {
    const value = (this.validObj === null) ? target.value : null;

    this.writeValue(value);
    this.propagateChange(value);
    this.propagateTouch();
  }

  validate(c: FormControl): Object {
    this.validObj = validateDateFormat(c);

    return this.validObj;
  }

  propagateChange = (_: any) => { };
  propagateTouch = () => { };
}
