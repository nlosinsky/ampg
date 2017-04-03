import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['styles/vendors.scss', 'styles/index.scss', 'app.styles.scss'],
  templateUrl: 'app.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.info('AppComponent initialised');
  }
}
