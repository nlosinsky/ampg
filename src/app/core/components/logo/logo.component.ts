import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: 'logo.template.html',
  styleUrls: ['logo.component.scss']
})

export class LogoComponent implements OnInit {
  public logo = 'assets/img/courses-logo.png';

  constructor() {
  }

  ngOnInit() {
    console.info('LogoComponent initialised');
  }
}
