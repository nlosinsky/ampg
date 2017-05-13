import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { CourseItem } from '../../core/entities';
import { CoursesService } from '../courses';

@Component({
  selector: 'edit-course',
  templateUrl: 'edit-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditCourseComponent implements OnInit, OnDestroy {
  course: CourseItem;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private activatedRoute: ActivatedRoute,
      private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    console.info('EditCourseComponent initialised');

    this.activatedRoute.params
        .takeUntil(this.ngUnsubscribe)
        .flatMap(({ id }) => this.coursesService.getItemById(id))
        .subscribe(data => this.course = data);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
