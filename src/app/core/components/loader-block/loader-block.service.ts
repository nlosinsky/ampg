import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderBlockService {
  public loaderIsShown = new BehaviorSubject<boolean>(false);

  constructor() {}

  show() {
    this.loaderIsShown.next(true);
  }

  hide() {
    this.loaderIsShown.next(false);
  }
}
