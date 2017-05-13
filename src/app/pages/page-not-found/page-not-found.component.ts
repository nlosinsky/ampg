import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h1 {
          text-align: center;
          margin-top: 20px;
      }
  `
  ],
  template: `<div><h1>Page not found!</h1></div>`
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.info('PageNotFoundComponent initialised');
  }
}
