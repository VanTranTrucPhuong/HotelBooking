import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  Environment constant firebaseConfig property
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelItemComponent } from './templates/hotel-item/hotel-item.component';
import { NavbarBottomComponent } from './templates/navbar-bottom/navbar-bottom.component';
import { HeaderComponent } from './templates/header/header.component';
import { ExploreItemComponent } from './templates/explore-item/explore-item.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';

// Date range
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from './templates/footer/footer.component';
import { RoomItemComponent } from './templates/room-item/room-item.component';
import { FillInDetailsComponent } from './pages/fill-in-details/fill-in-details.component';

// Pipes
import {NgPipesModule} from 'ngx-pipes';

// Material
import { UtilityService } from './services/utility.service.js';
import { BsEventsService } from './services/bs-events.service.js';
import { FindedHotelListComponent } from './pages/finded-hotel-list/finded-hotel-list.component';
import { FindedHotelItemComponent } from './templates/finded-hotel-item/finded-hotel-item.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Ng boostrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelItemComponent,
    NavbarBottomComponent,
    HeaderComponent,
    ExploreItemComponent,
    HotelDetailComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    RoomItemComponent,
    FillInDetailsComponent,
    FindedHotelListComponent,
    FindedHotelItemComponent,
    RoomListComponent,
    FilterPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,      // for db
    AngularFireAuthModule,         // for auth
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    NgPipesModule,
    NgbModule,
    AngularFirestoreModule
  ],
  providers: [
    // include some services in app module providers
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
