import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseItem } from '../../core/entities';
import { CoursesService } from './courses.service';
import { LoaderBlockService, ModalService } from '../../core/components';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  styleUrls: ['courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit {
  public coursesList: CourseItem[];
  public currentPage: number;
  public itemsPerPage: number;
  public coursesCount: number;
  private searchPhrase: string;

  constructor(
      private coursesService: CoursesService,
      private cd: ChangeDetectorRef,
      private loaderBlockService: LoaderBlockService,
      private modalService: ModalService
  ) {
    this.coursesList = [];
    
    this.resetPagination();
  }

  ngOnInit(): void {
    console.info('CoursesComponent initialised');

    this.getCoursesList();
  }
  
  private resetPagination(): void {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.coursesCount = 0;
  }

  private getCoursesList(): Subscription {
    return this.coursesService.getList(this.currentPage, this.itemsPerPage, this.searchPhrase)
        .subscribe((data: {courses: CourseItem[], coursesCount: number}) => {
          if (!data) {
            return;
          }

          const { courses, coursesCount } = data;

          this.coursesCount = coursesCount;
          this.coursesList = courses;
          this.cd.markForCheck();
        });
  }

  onDeleteItem(event: any): void {
    this.modalService.openConfirm(`Do you really want to delete #${event.id} course`).then(
        () => {
          this.loaderBlockService.show();

          this.coursesService
              .removeItem(event.id)
              .subscribe(
                  () => this.getCoursesList(),
                  null,
                  () => this.loaderBlockService.hide()
              );

          this.cd.markForCheck();
        },
        reason => console.warn(reason)
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
