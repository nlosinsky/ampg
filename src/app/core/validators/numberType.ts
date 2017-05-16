import { FormControl } from '@angular/forms';

export function validateNumberType(c: FormControl): Object {
  return /^\d+$/.test(c.value) ? null : { numberTypeError: { valid: false } };
}
