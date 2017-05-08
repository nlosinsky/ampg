import { FormControl } from '@angular/forms';

export function validateNumberType(c: FormControl): Object {
  return (isNaN(+c.value)) ?  { numberTypeError: { valid: false } } : null;
}
