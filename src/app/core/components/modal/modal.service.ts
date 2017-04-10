import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmModalComponent } from './confirm-modal';

@Injectable()
export class ModalService {
  constructor(
    private ngbModal: NgbModal
  ) {}

  open(content: any): NgbModalRef {
    return this.ngbModal.open(content);
  }

  openConfirm(message: string): Promise<any> {
    console.log(ConfirmModalComponent);
    const modalRef = this.open(ConfirmModalComponent);

    modalRef.componentInstance.message = message;

    return modalRef.result;
  }

}
