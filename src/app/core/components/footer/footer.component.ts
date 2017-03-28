import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-footer',
  templateUrl: 'footer.template.html',
  styleUrls: ['footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.info('FooterComponent initialised');
  }
}
