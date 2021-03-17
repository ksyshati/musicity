import {NgModule} from '@angular/core';
import {AppComponent} from '../../../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AuthService} from '../../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../services/auth.guard';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [HttpClientModule],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class MainLayoutModule { }
