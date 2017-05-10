import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseItem } from '../../core/entities';
import { CoursesService } from '../courses';

@Component({
  selector: 'edit-course',
  templateUrl: 'edit-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditCourseComponent implements OnInit {
  course: CourseItem;

  constructor(
      private activatedRoute: ActivatedRoute,
      private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    console.info('EditCourseComponent initialised');

    this.activatedRoute.params.flatMap(({ id }) => this.coursesService.getItemById(id))
      .subscribe(data => this.course = data);
  }
}
