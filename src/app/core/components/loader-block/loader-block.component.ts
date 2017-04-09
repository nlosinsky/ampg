import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { LoaderBlockService } from './loader-block.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'loader-block',
  templateUrl: 'loader-block.component.html',
  styleUrls:['loader-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderBlockComponent implements OnInit, OnDestroy {
  private loaderSubscribe: Subscription;
  show: boolean;

  constructor(
      private loaderBlockService: LoaderBlockService,
      private cd: ChangeDetectorRef
  ) {
    this.show = false;
  }

  ngOnInit(): void {
    this.loaderSubscribe = this.loaderBlockService.loaderIsShown.subscribe((show) => {
      this.show = show;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.loaderSubscribe.unsubscribe();
  }
}
