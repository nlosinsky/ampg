import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseAuthor, CourseItem } from '../../core/entities';
import { EndpointsConstant } from '../../core/constants';
import { RestService } from '../../core/services';
import { CoursesService } from '../courses';

@Component({
  selector: 'add-course',
  templateUrl: 'add-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCourseComponent implements OnInit {
  availableCourseData: CourseItem;
  courseForm: FormGroup;
  authorsList: CourseAuthor[];

  @Input() set courseDetails(item: CourseItem) {
    if (item) {
      const { name: title, shortDescription: description, date, duration, authors } = item;

      this.courseForm.setValue({ title, description, date, duration, authors });
      this.availableCourseData = item;
    }
  };

  constructor(
      private fb: FormBuilder,
      private restService: RestService,
      private cd: ChangeDetectorRef,
      private router: Router,
      private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    console.info('AddCourseComponent initialised');

    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      authors: [[], [Validators.required]]
    });

    this.restService.get(EndpointsConstant.AUTHORS.ALL)
        .subscribe((data) => {
          this.authorsList = data;
          this.cd.markForCheck();
        });
  }

  onSubmit(): void {
    if (this.availableCourseData) {
      this.updateCourse();
    } else {
      this.createCourse();
    }
  }

  createCourse(): void {
    this.coursesService.createCourse(this.courseForm.value)
        .subscribe((id) => {
          console.info('COURSE CREATED!');

          this.router.navigate(['courses', id]);
        });
  }

  updateCourse(): void {
    this.coursesService.updateItem(this.courseForm.value, this.availableCourseData)
        .subscribe(() => {
          console.info('COURSE UPDATED!');

          this.router.navigate(['courses']);
        });
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }
}
