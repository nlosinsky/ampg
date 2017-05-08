import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CourseAuthor } from '../../core/entities';
import { EndpointsConstant } from '../../core/constants';
import { RestService } from '../../core/services';

@Component({
  selector: 'add-course',
  templateUrl: 'add-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCourseComponent implements OnInit {
  addCourseForm: FormGroup;
  authorsList: CourseAuthor[];

  constructor(
      private fb: FormBuilder,
      private restService: RestService,
      private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.info('AddCourseComponent initialised');

    this.addCourseForm = this.fb.group({
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
    console.info(this.addCourseForm.value, this.addCourseForm.valid);
  }

  onCancel(): void {
    this.addCourseForm.reset();
  }
}
