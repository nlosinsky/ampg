import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { CourseItem } from '../../core/entities';
import { CoursesService } from './courses.service';
import { LoaderBlockService, ModalService } from '../../core/components';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  styleUrls: ['courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
  public coursesList: CourseItem[];
  public currentPage: number;
  public itemsPerPage: number;
  public coursesCount: number;
  private searchPhrase: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private coursesService: CoursesService,
      private cd: ChangeDetectorRef,
      private loaderBlockService: LoaderBlockService,
      private modalService: ModalService
  ) {}

  ngOnInit(): void {
    console.info('CoursesComponent initialised');

    this.coursesList = [];

    this.resetPagination();
    this.getCoursesList();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  
  private resetPagination(): void {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.coursesCount = 0;
  }

  private getCoursesList(): Subscription {
    return this.coursesService.getList(this.currentPage, this.itemsPerPage, this.searchPhrase)
        .filter(data => !!data)
        .subscribe((data: {courses: CourseItem[], coursesCount: number}) => {
          const { courses, coursesCount } = data;

          this.coursesCount = coursesCount;
          this.coursesList = courses;
          this.cd.markForCheck();
        });
  }

  onDeleteItem(event: any): void {
    this.modalService.openConfirm(`Do you really want to delete #${event.id} course`)
        .takeUntil(this.ngUnsubscribe)
        .do(
            () => this.loaderBlockService.show(),
            reason => console.warn(reason)
        )
        .flatMap(() => this.coursesService.removeItem(event.id))
        .finally(() => this.loaderBlockService.hide())
        .subscribe(
            () => this.getCoursesList(),
            err => console.log(err)
        );
  }

  findCourses(phrase: string): void {
    this.searchPhrase = phrase;
    this.resetPagination();
    this.getCoursesList();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getCoursesList();
  }
}
