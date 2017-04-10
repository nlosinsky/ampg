import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseItem } from '../../core/entities';
import { CoursesService } from './courses.service';
import { LoaderBlockService, ModalService } from '../../core/components';
import { FilterPipe } from '../../core/pipes';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  styleUrls: ['courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    FilterPipe
  ]
})

export class CoursesComponent implements OnInit, OnDestroy {
  public coursesList: CourseItem[];
  private originalCoursesList: CourseItem[];
  private coursesSubscription: Subscription[];

  constructor(
      private coursesService: CoursesService,
      private cd: ChangeDetectorRef,
      private loaderBlockService: LoaderBlockService,
      private ngZone: NgZone,
      private modalService: ModalService,
      private filterPipe: FilterPipe
  ) {
    this.coursesList = [];
    this.originalCoursesList = [];
    this.coursesSubscription = [];
  }

  ngOnInit(): void {
    console.info('CoursesComponent initialised');

    this.coursesSubscription.push(
        this.coursesService.getList().subscribe((data: CourseItem[]) => {
          this.coursesList = data;
          this.originalCoursesList = data;
          this.cd.markForCheck();
        })
    );

    let time;
    this.coursesSubscription.push(
      this.ngZone.onUnstable.subscribe(() => time = Date.now())
    );

    this.coursesSubscription.push(
      this.ngZone.onStable.subscribe(() => {
        if (!time) {
          return;
        }

        console.log(Date.now() - time);
      })
    );
  }

  ngOnDestroy(): void {
    this.coursesSubscription.forEach(subscription => subscription.unsubscribe());
  }

  onDeleteItem(event: any): void {
    this.modalService.openConfirm(`Do you really want to delete #${event.id} course`).then(
        () => {
          this.loaderBlockService.show();

          this.coursesSubscription.push(
            this.coursesService.removeItem(event.id).subscribe(() => this.loaderBlockService.hide())
          );

          this.cd.markForCheck();
        },
        reason => console.warn(reason)
    );
  }

  findCourses(event: string): void {
    this.coursesList = this.filterPipe.transform(this.originalCoursesList, event);
  }
}
