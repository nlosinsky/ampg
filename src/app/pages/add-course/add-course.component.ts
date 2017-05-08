import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'add-course',
  templateUrl: 'add-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCourseComponent implements OnInit {
  addCourseForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.info('AddCourseComponent initialised');

    this.addCourseForm = this.fb.group({
      title: ['2', [Validators.required, Validators.maxLength(50)]],
      description: ['2', [Validators.required, Validators.maxLength(500)]],
      // date: ['2', [Validators.required]],
      duration: ['sdsd', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.info(this.addCourseForm.value, this.addCourseForm.valid);
  }

  cancel(): void {
    this.addCourseForm.reset();
  }
}
