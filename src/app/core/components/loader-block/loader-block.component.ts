import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { LoaderBlockService } from './loader-block.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'loader-block',
  templateUrl: 'loader-block.component.html',
  styleUrls:['loader-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderBlockComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  show: boolean;

  constructor(
      private loaderBlockService: LoaderBlockService,
      private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.show = false;

    this.loaderBlockService.loaderIsShown
        .takeUntil(this.ngUnsubscribe)
        .subscribe((show) => {
          this.show = show;
          this.cd.markForCheck();
        });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
