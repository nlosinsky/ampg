import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

import { Router } from '@angular/router';

import { CourseItem } from '../../../core/entities';

@Component({
  selector: 'course',
  templateUrl: 'course.template.html',
  styleUrls: ['course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseComponent implements OnInit {
  @Input() course: CourseItem;
  @Output() deleteItem: EventEmitter<Object> = new EventEmitter();

  constructor(
      private router: Router
  ) {}

  ngOnInit(): void {
    console.info('CourseComponent initialised');
  }

  deleteCourseItem(id: string|number): void {
    this.deleteItem.emit({ id });
  }

  editCourseItem(id: number): void {
    this.router.navigate(['courses', id]);
  }
}
