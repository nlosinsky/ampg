import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { ConfirmModalComponent } from './confirm-modal';

@Injectable()
export class ModalService {
  constructor(
    private ngbModal: NgbModal
  ) {}

  open(content: any): NgbModalRef {
    return this.ngbModal.open(content);
  }

  openConfirm(message: string): Observable<any> {
    const modalRef = this.open(ConfirmModalComponent);

    modalRef.componentInstance.message = message;

    return Observable.fromPromise(modalRef.result);
  }

}
