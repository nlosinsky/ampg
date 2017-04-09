import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'date-input',
  templateUrl: 'date-input.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent {
  constructor() {}
}
