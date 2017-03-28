import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

import { CourseItem } from '../../../core/entities';

@Component({
  selector: 'course',
  templateUrl: 'course.template.html',
  styleUrls: ['course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseComponent implements OnInit {
  @Input() course: CourseItem;
  @Output() deleteItem = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    console.info('CourseComponent initialised');
  }

  deleteCourseItem(id) {
    this.deleteItem.emit({ id });
  }
}
