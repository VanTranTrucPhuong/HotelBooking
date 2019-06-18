import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MbscModule } from './../lib/mobiscroll/js/mobiscroll.angular.min.js';

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
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from './templates/footer/footer.component';
import { FindHotelItemComponent } from './templates/find-hotel-item/find-hotel-item.component';
import { FindHotelComponent } from './pages/find-hotel/find-hotel.component';
import { FillInDetailsComponent } from './pages/fill-in-details/fill-in-details.component';

// Wheel Selector

// Material
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

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
    FindHotelItemComponent,
    FindHotelComponent,
    FillInDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DateRangePickerModule,
    DropDownListModule,
    DropDownButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MbscModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
