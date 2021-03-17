import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLayoutComponent } from './shared/components/card-layout/card-layout.component';
import { ListLayoutComponent } from './shared/components/list-layout/list-layout.component';
import { NewCardLayoutComponent } from './shared/components/new-card-layout/new-card-layout.component';
import { ProposalPageComponent } from './proposal-page/proposal-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CommentComponent } from './shared/components/card-layout/comment/comment.component';
import { MemberComponent } from './shared-card-pages/musical-card-page/member/member.component';
import { ListElementComponent } from './shared/components/list-layout/list-element/list-element.component';
import {MainNavbarComponent} from './shared/components/main-layout/main-navbar/main-navbar.component';
import {HomeComponent} from './shared/components/main-layout/home/home.component';
import {AboutComponent} from './shared/components/main-layout/about/about.component';
import {SignUpComponent} from './shared/components/main-layout/sign-up/sign-up.component';
import {SignInComponent} from './shared/components/main-layout/sign-in/sign-in.component';
import {EventCardPageComponent} from './shared-card-pages/event-card-page/event-card-page.component';
import {IdentityCardPageComponent} from './shared-card-pages/identity-card-page/identity-card-page.component';
import {LocationCardPageComponent} from './shared-card-pages/location-card-page/location-card-page.component';
import {MusicalCardPageComponent} from './shared-card-pages/musical-card-page/musical-card-page.component';
import {ListEventsPageComponent} from './shared-list-pages/list-events-page/list-events-page.component';
import {UserListEventsPageComponent} from './shared-list-pages/user-list-events-page/user-list-events-page.component';
import {ListMusicalCardsPageComponent} from './shared-list-pages/list-musical-cards-page/list-musical-cards-page.component';
import {ListLocationsPageComponent} from './shared-list-pages/list-locations-page/list-locations-page.component';
import {UserListMusicalCardsPageComponent} from './shared-list-pages/user-list-musical-cards-page/user-list-musical-cards-page.component';
import {UserListLocationsPageComponent} from './shared-list-pages/user-list-locations-page/user-list-locations-page.component';
import {NewEventPageComponent} from './shared-new-pages/new-event-page/new-event-page.component';
import {NewLocationPageComponent} from './shared-new-pages/new-location-page/new-location-page.component';
import {NewMusicalCardPageComponent} from './shared-new-pages/new-musical-card-page/new-musical-card-page.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {NewPasswordPageComponent} from './new-password-page/new-password-page.component';
import {NewProposalPageComponent} from './new-proposal-page/new-proposal-page.component';
import {EventComponent} from './shared/components/card-layout/event/event.component';
import { PhotoComponent } from './shared/components/card-layout/photo/photo.component';
import { PhotoPageComponent } from './shared/components/card-layout/photo-page/photo-page.component';
import { AudioComponent } from './shared-card-pages/musical-card-page/audio/audio.component';
import {TimetableComponent} from './shared-card-pages/location-card-page/timetable/timetable.component';
import { SettingsComponent } from './shared-card-pages/identity-card-page/settings/settings.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {AuthService} from './shared/services/auth.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CardLayoutComponent,
    ListLayoutComponent,
    NewCardLayoutComponent,
    EventCardPageComponent,
    IdentityCardPageComponent,
    LocationCardPageComponent,
    MusicalCardPageComponent,
    ListEventsPageComponent,
    ListLocationsPageComponent,
    ListMusicalCardsPageComponent,
    UserListEventsPageComponent,
    UserListMusicalCardsPageComponent,
    UserListLocationsPageComponent,
    NewEventPageComponent,
    NewLocationPageComponent,
    NewMusicalCardPageComponent,
    NavbarComponent,
    NewPasswordPageComponent,
    NewProposalPageComponent,
    ProposalPageComponent,
    MainLayoutComponent,
    MainNavbarComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    SignInComponent,
    CommentComponent,
    MemberComponent,
    ListElementComponent,
    EventComponent,
    PhotoComponent,
    PhotoPageComponent,
    AudioComponent,
    TimetableComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
