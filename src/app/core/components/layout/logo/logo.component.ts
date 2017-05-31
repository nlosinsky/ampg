import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: 'logo.template.html',
  styleUrls: ['logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LogoComponent implements OnInit {
  public logo: string = 'assets/img/courses-logo.png';

  constructor() {
  }

  ngOnInit(): void {
    console.info('LogoComponent initialised');
  }
}
