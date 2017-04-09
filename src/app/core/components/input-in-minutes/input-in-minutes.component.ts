import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'input-in-minutes',
  templateUrl: 'input-in-minutes.template.html',
  styleUrls: ['input-in-minutes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputInMinutesComponent {
  minutes: string;
  constructor() {}
}
