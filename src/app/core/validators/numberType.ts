import { FormControl } from '@angular/forms';

export function validateNumberType(c: FormControl): Object {
  return /[0-9]/.test(c.value) ? null : { numberTypeError: { valid: false } };
}
