import { NgModule } from '@angular/core';

import { ConfirmModalComponent } from './confirm-modal';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  providers: [
    ModalService
  ],
  entryComponents: [
    ConfirmModalComponent
  ]
})

export class ModalModule {

}
