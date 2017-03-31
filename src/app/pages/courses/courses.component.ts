import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseItem } from '../../core/entities';
import { CoursesService } from './courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
  private coursesList: CourseItem[];
  private coursesSubscription: Subscription;

  constructor(
      private coursesSvc: CoursesService,
      private cd: ChangeDetectorRef
  ) {
    this.coursesList = [];
  }

  ngOnInit() {
    console.info('CoursesComponent initialised');

    this.coursesSubscription = this.coursesSvc.getList().subscribe((data: CourseItem[]) => {
      this.coursesList = data;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.coursesSubscription.unsubscribe();
  }

  onDeleteItem(event): void {
    if (confirm(`Do you really want to delete #${event.id} course`)) {
      this.coursesSvc.removeItem(event.id);
    }
  }
}
