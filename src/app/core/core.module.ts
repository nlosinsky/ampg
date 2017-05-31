import { NgModule } from '@angular/core';
import { XHRBackend, RequestOptions } from '@angular/http';
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
    DateInputComponent,
    InputInMinutesComponent,
    ModalModule,
    PaginationComponent
} from './components';
import {
    AuthService,
    LocalStorageService,
    AuthorizedHttp,
    RestService
} from './services';
import {
    DurationPipe,
    OrderByPipe,
    FilterPipe
} from './pipes';
import { AuthGuard } from './guards';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    ModalModule
  ],
  providers: [
    AuthService,
    LoaderBlockService,
    LocalStorageService,
    {
      provide: AuthorizedHttp,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, localStorageService: LocalStorageService) => {
        return new AuthorizedHttp(backend, defaultOptions, localStorageService);
      },
      deps: [XHRBackend, RequestOptions, LocalStorageService]
    },
    RestService,
    AuthGuard
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
    InputInMinutesComponent,
    PaginationComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoaderBlockComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    DateInputComponent,
    InputInMinutesComponent,
    PaginationComponent
  ]
})

export class CoreModule {

}
