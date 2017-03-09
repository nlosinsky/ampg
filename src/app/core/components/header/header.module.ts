import { NgModule } from'@angular/core';

import { HeaderComponent } from'./header.component';
import {LogoComponent} from "../logo/logo.component";

@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent
    ],
    imports: [],
    exports: [ HeaderComponent ]
})
export class HeaderModule {
    constructor() {
    }
}