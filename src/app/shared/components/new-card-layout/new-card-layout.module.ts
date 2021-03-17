import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NewCardLayoutService} from './new-card-layout.service';

@NgModule({
    declarations: [],
    imports: [FormsModule, ReactiveFormsModule, BrowserModule],
    exports: [],
    providers: [NewCardLayoutService]
})
export class NewCardLayoutModule {}
