import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'add-course',
  templateUrl: 'add-course.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCourseComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.info('AddCourseComponent initialised');
  }

  save(): void {

  }

  cancel(): void {

  }
}
