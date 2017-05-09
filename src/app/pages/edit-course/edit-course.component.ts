import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../core/services';
import { EndpointsConstant } from '../../core/constants';
import { CourseItem } from '../../core/entities';

@Component({
  selector: 'edit-course',
  templateUrl: 'edit-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditCourseComponent implements OnInit {
  course: CourseItem;

  constructor(
      private activatedRoute: ActivatedRoute,
      private restService: RestService
  ) {}

  ngOnInit(): void {
    console.info('EditCourseComponent initialised');

    this.activatedRoute.params.flatMap(({ id }) => {
      const url = EndpointsConstant.COURSES.SINGLE.replace(/:id/, id.toString());

      return this.restService.get(url);
    })
    .subscribe(data => this.course = data);
  }
}
