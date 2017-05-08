import { Component, ChangeDetectionStrategy, forwardRef } from '@angular/core';
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

  constructor() {}

  writeValue(value: any): void {
    if (value !== undefined) {
      this.minutes = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  onChange({ target }: { target: HTMLInputElement }): void {
    this.writeValue(target.value);
    this.propagateChange(target.value);
  }

  validate(c: FormControl): Object {
    return validateNumberType(c);
  }

  propagateChange = (_: any) => { };

  registerOnTouched(fn: any): void {};
}
