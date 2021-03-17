import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardLayoutComponent} from './shared/components/card-layout/card-layout.component';
import {ListLayoutComponent} from './shared/components/list-layout/list-layout.component';
import {NewCardLayoutComponent} from './shared/components/new-card-layout/new-card-layout.component';
import {ProposalPageComponent} from './proposal-page/proposal-page.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {EventCardPageComponent} from './shared-card-pages/event-card-page/event-card-page.component';
import {IdentityCardPageComponent} from './shared-card-pages/identity-card-page/identity-card-page.component';
import {LocationCardPageComponent} from './shared-card-pages/location-card-page/location-card-page.component';
import {MusicalCardPageComponent} from './shared-card-pages/musical-card-page/musical-card-page.component';
import {ListEventsPageComponent} from './shared-list-pages/list-events-page/list-events-page.component';
import {ListLocationsPageComponent} from './shared-list-pages/list-locations-page/list-locations-page.component';
import {ListMusicalCardsPageComponent} from './shared-list-pages/list-musical-cards-page/list-musical-cards-page.component';
import {UserListEventsPageComponent} from './shared-list-pages/user-list-events-page/user-list-events-page.component';
import {UserListLocationsPageComponent} from './shared-list-pages/user-list-locations-page/user-list-locations-page.component';
import {UserListMusicalCardsPageComponent} from './shared-list-pages/user-list-musical-cards-page/user-list-musical-cards-page.component';
import {NewEventPageComponent} from './shared-new-pages/new-event-page/new-event-page.component';
import {NewLocationPageComponent} from './shared-new-pages/new-location-page/new-location-page.component';
import {NewMusicalCardPageComponent} from './shared-new-pages/new-musical-card-page/new-musical-card-page.component';
import {HomeComponent} from './shared/components/main-layout/home/home.component';
import {AboutComponent} from './shared/components/main-layout/about/about.component';
import {SignUpComponent} from './shared/components/main-layout/sign-up/sign-up.component';
import {SignInComponent} from './shared/components/main-layout/sign-in/sign-in.component';
import {NewPasswordPageComponent} from './new-password-page/new-password-page.component';
import {NewProposalPageComponent} from './new-proposal-page/new-proposal-page.component';
import {TimetableComponent} from './shared-card-pages/location-card-page/timetable/timetable.component';
import {PhotoPageComponent} from './shared/components/card-layout/photo-page/photo-page.component';
import {MemberComponent} from './shared-card-pages/musical-card-page/member/member.component';



const routes: Routes = [
    {path: '', component: MainLayoutComponent, children: [
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'sign-in', component: SignInComponent}
        ]},
  {path: 'card', component: CardLayoutComponent, children: [
      {path: 'event-card', component: EventCardPageComponent, children: [
              {path: 'photo', component: PhotoPageComponent}
          ]},
      {path: 'identity-card', component: IdentityCardPageComponent},
      {path: 'location-card', component: LocationCardPageComponent, children: [
              {path: 'timetable', component: TimetableComponent},
              {path: 'photo', component: PhotoPageComponent}
          ]},
      {path: 'musical-card', component: MusicalCardPageComponent, children: [
              {path: 'photo', component: PhotoPageComponent},
              {path: 'members', component: MemberComponent}
          ]}
    ]},
  {path: 'list', component: ListLayoutComponent, children: [
          {path: 'all-events', component: ListEventsPageComponent},
          {path: 'all-locations', component: ListLocationsPageComponent},
          {path: 'all-musical-cards', component: ListMusicalCardsPageComponent},
          {path: 'events', component: UserListEventsPageComponent},
          {path: 'locations', component: UserListLocationsPageComponent},
          {path: 'musical-cards', component: UserListMusicalCardsPageComponent}
    ]},
  {path: 'new', component: NewCardLayoutComponent, children: [
          {path: 'new-event', component: NewEventPageComponent},
          {path: 'new-location', component: NewLocationPageComponent},
          {path: 'new-musical-card', component: NewMusicalCardPageComponent}
    ]},
    {path: 'new-password', component: NewPasswordPageComponent},
    {path: 'new-proposal', component: NewProposalPageComponent},
    {path: 'proposal-page', component: ProposalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
