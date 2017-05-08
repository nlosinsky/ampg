import { FormControl } from '@angular/forms';

export function validateDateFormat(c: FormControl): Object {
  // dd/MM/yyyy date format
  return /^(0[1-9]|[12][0-9]|3[01])[/.](0[1-9]|1[012])[/.](19|20)\d\d$/
      .test(c.value) ? null : { dateFormatError: { valid: false } };
}
