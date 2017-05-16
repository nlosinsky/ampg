import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-modal',
  templateUrl: 'confirm-modal.component.html'
})
export class ConfirmModalComponent {
  @Input() message: string;

  constructor(
      public activeModal: NgbActiveModal
  ) {}

  close(): void {
    this.activeModal.close('OK');
  }

  dismiss(): void {
    this.activeModal.dismiss('Cancel');
  }
}
