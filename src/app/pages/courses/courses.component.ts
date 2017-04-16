import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
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
  public currentPage: number;
  public itemsPerPage: number;
  public coursesCount: number;
  private originalCoursesList: CourseItem[];
  private coursesSubscription: Subscription[];

  constructor(
      private coursesService: CoursesService,
      private cd: ChangeDetectorRef,
      private loaderBlockService: LoaderBlockService,
      private modalService: ModalService,
      private filterPipe: FilterPipe
  ) {
    this.coursesList = [];
    this.originalCoursesList = [];
    this.coursesSubscription = [];
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.coursesCount = 0;
  }

  ngOnInit(): void {
    console.info('CoursesComponent initialised');

    this.coursesSubscription.push(this.getCoursesList());
  }

  private getCoursesList(): Subscription {
    return this.coursesService.getList(this.currentPage, this.itemsPerPage)
        .subscribe((data: {courses: CourseItem[], coursesCount: number}) => {
          if (!data) {
            return;
          }

          const { courses, coursesCount } = data;

          this.coursesCount = coursesCount;
          this.coursesList = courses;
          this.originalCoursesList = courses;
          this.cd.markForCheck();
        });
  }

  ngOnDestroy(): void {
    this.coursesSubscription.forEach(subscription => subscription.unsubscribe());
  }

  onDeleteItem(event: any): void {
    this.modalService.openConfirm(`Do you really want to delete #${event.id} course`).then(
        () => {
          this.loaderBlockService.show();

          this.coursesSubscription.push(
            this.coursesService
                .removeItem(event.id)
                .subscribe(() => this.getCoursesList()
                .add(() => this.loaderBlockService.hide()))
          );

          this.cd.markForCheck();
        },
        reason => console.warn(reason)
    );
  }

  findCourses(event: string): void {
    this.coursesList = this.filterPipe.transform(this.originalCoursesList, event);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.coursesSubscription.push(this.getCoursesList());
  }
}
