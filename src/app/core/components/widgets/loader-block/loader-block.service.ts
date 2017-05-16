import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class LoaderBlockService {
  public loaderIsShown: ReplaySubject<boolean> = new ReplaySubject();

  constructor() {}

  show(): void {
    this.loaderIsShown.next(true);
  }

  hide(): void {
    this.loaderIsShown.next(false);
  }
}
