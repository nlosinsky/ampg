import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { LoaderBlockService } from './loader-block.service';


@Component({
  selector: 'loader-block',
  templateUrl: 'loader-block.component.html',
  styleUrls:['loader-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderBlockComponent implements OnInit {
  show: boolean;

  constructor(
      private loaderBlockService: LoaderBlockService,
      private cd: ChangeDetectorRef
  ) {
    this.show = false;
  }

  ngOnInit() {
    this.loaderBlockService.loaderIsShown.subscribe((show) => {
      this.show = show;
      this.cd.markForCheck();
    });
  }
}
