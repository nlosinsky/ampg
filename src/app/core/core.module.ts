import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
    FooterModule,
    HeaderModule,
    ToolboxComponent
} from './components';

@NgModule({
    imports: [
        FooterModule,
        FormsModule
    ],
    providers: [],
    exports: [
        FooterModule,
        HeaderModule,
        ToolboxComponent 
    ],
    declarations: [
        ToolboxComponent
    ]
})

export class CoreModule {

}