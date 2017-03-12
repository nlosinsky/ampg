import { NgModule } from'@angular/core';

import { HeaderComponent } from'./header.component';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [ HeaderComponent ]
})
export class HeaderModule {
    constructor() {
    }
}