import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    FooterComponent,
    HeaderComponent,
    ToolboxComponent,
    LogoComponent
} from './components';

@NgModule({
    imports: [
        FormsModule,
        RouterModule
    ],
    providers: [],
    exports: [
        FooterComponent,
        HeaderComponent,
        ToolboxComponent 
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        ToolboxComponent,
        LogoComponent
    ]
})

export class CoreModule {

}