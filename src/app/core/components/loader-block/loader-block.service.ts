import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderBlockService {
  public loaderIsShown: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  show(): void {
    this.loaderIsShown.next(true);
  }

  hide(): void {
    this.loaderIsShown.next(false);
  }
}
