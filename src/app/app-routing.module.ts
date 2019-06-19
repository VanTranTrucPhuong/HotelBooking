import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from './templates/footer/footer.component';
import { FindHotelItemComponent } from './templates/find-hotel-item/find-hotel-item.component';
import { HeaderComponent } from './templates/header/header.component';
import { FindHotelComponent } from './pages/find-hotel/find-hotel.component';
import { FillInDetailsComponent } from './pages/fill-in-details/fill-in-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'HOME', component: HomeComponent },
  { path: 'FINDHOTEL', component: FindHotelComponent},
  { path: 'hotel-detail', component: HotelDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'fill-in-details', component: FillInDetailsComponent},
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
