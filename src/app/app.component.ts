import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['styles/vendors.scss', 'styles/index.scss', 'app.styles.scss'],
  templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit() {
    console.info('AppComponent initialised');
  }
}
