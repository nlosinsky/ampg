import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CourseItem } from '../../core/entities';
import { AppState } from '../../core/store';
import { CoursesService } from './courses.service';
import { LoaderBlockService, ModalService } from '../../core/components';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  styleUrls: ['courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
  public coursesList$: Observable<CourseItem[]>;
  public coursesCount$: Observable<number>;
  public currentPage: number;
  public itemsPerPage: number;
  private searchPhrase: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private coursesService: CoursesService,
      private loaderBlockService: LoaderBlockService,
      private modalService: ModalService,
      private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.info('CoursesComponent initialised');

    this.coursesList$ = this.store.select(appState => appState.courses.courses);
    this.coursesCount$ = this.store.select(appState => appState.courses.coursesCount);

    this.resetPagination();
    this.updateCoursesList();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  
  private resetPagination(): void {
    this.currentPage = 1;
    this.itemsPerPage = 5;
  }

  private updateCoursesList(): void {
    this.coursesService.addItems(this.currentPage, this.itemsPerPage, this.searchPhrase);
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
            () => this.updateCoursesList(),
            err => console.log(err)
        );
  }

  findCourses(phrase: string): void {
    this.searchPhrase = phrase;
    this.resetPagination();
    this.updateCoursesList();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateCoursesList();
  }
}
