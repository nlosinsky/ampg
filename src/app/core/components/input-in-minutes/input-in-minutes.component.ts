import { Component, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator, FormControl
} from '@angular/forms';

import { validateNumberType } from '../../validators';

@Component({
  selector: 'input-in-minutes',
  templateUrl: 'input-in-minutes.template.html',
  styleUrls: ['input-in-minutes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputInMinutesComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputInMinutesComponent),
      multi: true
    }
  ]
})
export class InputInMinutesComponent implements ControlValueAccessor, Validator {
  minutes: string;

  constructor(
      private cd: ChangeDetectorRef
  ) {}

  writeValue(value: any): void {
    if (value !== undefined) {
      this.minutes = value;
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
    this.writeValue(target.value);
    this.propagateChange(target.value);
    this.propagateTouch();
  }

  onBlur(): void {
    this.propagateTouch();
  }

  validate(c: FormControl): Object {
    return validateNumberType(c);
  }

  propagateChange = (_: any) => { };
  propagateTouch = () => { };
}
