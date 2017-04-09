import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoaderBlockComponent,
    LoaderBlockService,
    ConfirmModalComponent,
    DateInputComponent,
    InputInMinutesComponent
} from './components';
import {
    AuthService,
    LocalStorageService
} from './services';
import {
    DurationPipe,
    OrderByPipe,
    FilterPipe
} from './pipes';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    AuthService,
    LoaderBlockService,
    LocalStorageService
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    LoaderBlockComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    DateInputComponent,
    InputInMinutesComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoaderBlockComponent,
    ConfirmModalComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    DateInputComponent,
    InputInMinutesComponent
  ]
})

export class CoreModule {

}
