import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
  EventEmitter
} from '@angular/core';
import { CourseItem } from '../../core/entities';
import { CoursesService } from './courses.service';
import { Subscription } from 'rxjs';
import { LoaderBlockService } from '../../core/components';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
  private coursesList: CourseItem[];
  private coursesSubscription: Subscription;

  constructor(
      private coursesService: CoursesService,
      private cd: ChangeDetectorRef,
      private loaderBlockService: LoaderBlockService,
      private ngZone: NgZone
  ) {
    this.coursesList = [];
  }

  ngOnInit(): void {
    console.info('CoursesComponent initialised');

    this.coursesSubscription = this.coursesService.getList().subscribe((data: CourseItem[]) => {
      this.coursesList = data;
      this.cd.markForCheck();
    });

    let time;
    this.ngZone.onUnstable.subscribe(() => time = Date.now());
    this.ngZone.onStable.subscribe(() => {
      if (!time) {
        return;
      }

      console.log(Date.now() - time);
    });
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }

  onDeleteItem(event: any): void {
    if (confirm(`Do you really want to delete #${event.id} course`)) {
      this.loaderBlockService.show();

      this.coursesService.removeItem(event.id).subscribe(() => this.loaderBlockService.hide());
    }
  }
}
