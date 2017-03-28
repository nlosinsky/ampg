import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: 'toolbox.template.html',
  styleUrls: ['toolbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent implements OnInit {
  public findField: string;

  constructor() {
  }

  ngOnInit() {
    console.info('ToolboxComponent initialised');
  }

  findActon(): void {
    console.log(this.findField);
  }
}
