import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { CourseAuthor, CourseItem } from '../../core/entities';
import { EndpointsConstant } from '../../core/constants';
import { RestService } from '../../core/services';

@Component({
  selector: 'add-course',
  templateUrl: 'add-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCourseComponent implements OnInit {
  @Input() set courseDetails(item: CourseItem) {
    if (item) {
      const { name: title, shortDescription: description, date, duration, authors } = item;

      this.courseForm.setValue({ title, description, date, duration, authors });
    }
  };
  courseForm: FormGroup;
  authorsList: CourseAuthor[];

  constructor(
      private fb: FormBuilder,
      private restService: RestService,
      private cd: ChangeDetectorRef,
      private location: Location
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

    this.restService.get(EndpointsConstant.AUTHORS.ALL).subscribe((data) => {
      this.authorsList = data;
      this.cd.markForCheck();
    });
  }

  onSubmit(): void {
    console.info(this.courseForm.value, this.courseForm.valid);
  }

  onCancel(): void {
    this.location.back();
  }
}
