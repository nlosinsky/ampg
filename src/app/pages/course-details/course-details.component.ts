import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'course-details',
  templateUrl: 'course-details.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseDetailsComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.info('CourseDetailsComponent initialised');
  }
}
