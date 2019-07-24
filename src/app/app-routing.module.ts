import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from './templates/footer/footer.component';
import { RoomItemComponent } from './templates/room-item/room-item.component';
import { HeaderComponent } from './templates/header/header.component';
import { FillInDetailsComponent } from './pages/fill-in-details/fill-in-details.component';
import { FindedHotelItemComponent } from './templates/finded-hotel-item/finded-hotel-item.component';
import { FindedHotelListComponent } from './pages/finded-hotel-list/finded-hotel-list.component';
import { RoomListComponent } from './pages/room-list/room-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'HOME', component: HomeComponent },
  { path: 'FINDEDHOTELLIST', component: FindedHotelListComponent },
  { path: 'ROOMLIST', component: RoomListComponent},
  { path: 'HOTELDETAIL', component: HotelDetailComponent},
  { path: 'LOGIN', component: LoginComponent},
  { path: 'SIGNUP', component: SignUpComponent},
  { path: 'FILLINDETAILS', component: FillInDetailsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
