import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CourseItem } from '../../core/entities';
import { CoursesService } from './courses.service';
import { Subscription } from 'rxjs';
import { LoaderBlockService } from '../../core/components';
import { ConfirmModalComponent } from '../../core/components/confirm-modal';

@Component({
  selector: 'courses',
  templateUrl: 'courses.template.html',
  styleUrls: ['courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
  public coursesList: CourseItem[];
  private coursesSubscription: Subscription;

  constructor(
      private coursesService: CoursesService,
      private cd: ChangeDetectorRef,
      private loaderBlockService: LoaderBlockService,
      private ngZone: NgZone,
      private ngbModal: NgbModal
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
    const modalRef = this.ngbModal.open(ConfirmModalComponent);

    modalRef.componentInstance.message = `Do you really want to delete #${event.id} course`;
    modalRef.result.then(
        () => {
          this.loaderBlockService.show();
          this.coursesService.removeItem(event.id).subscribe(() => this.loaderBlockService.hide());
          this.cd.markForCheck();
        },
        reason => console.warn(reason)
    );
  }
}
