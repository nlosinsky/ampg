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
    LoaderBlockService
} from './components';
import { AuthService } from './services';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    AuthService,
    LoaderBlockService
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    LoaderBlockComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoaderBlockComponent
  ]
})

export class CoreModule {

}
