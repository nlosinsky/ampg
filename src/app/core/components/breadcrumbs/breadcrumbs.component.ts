import {
	Component,
	ChangeDetectionStrategy,
	OnInit,
	OnDestroy,
	ChangeDetectorRef
} from '@angular/core';
import { Subject } from 'rxjs';

import { BreadcrumbsService } from './breadcrumbs.service';
import { Breadcrumb } from '../../entities';

@Component({
  selector: 'breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    BreadcrumbsService
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumbs: Breadcrumb[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private cd: ChangeDetectorRef,
      private breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {

  	this.breadcrumbsService.onBreadcrumbChange
				.takeUntil(this.ngUnsubscribe)
				.subscribe((data) => {
  				this.breadcrumbs = data;

  				this.cd.markForCheck();
  	});
  }

  ngOnDestroy(): void {
  	this.ngUnsubscribe.next();
  	this.ngUnsubscribe.complete();
  }
}


