import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: 'toolbox.template.html',
  styleUrls: ['toolbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent implements OnInit {
  @Output() query: EventEmitter<string> = new EventEmitter();

  public findField: string;

  constructor() {
  }

  ngOnInit(): void {
    console.info('ToolboxComponent initialised');
  }

  findActon(): void {
    this.query.emit(this.findField);
  }
}
