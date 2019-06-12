import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from './templates/footer/footer.component';
import { FindHotelItemComponent } from './templates/find-hotel-item/find-hotel-item.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { HeaderComponent } from './templates/header/header.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { CheckoutDetailComponent } from './pages/checkout-detail/checkout-detail.component';
import { FindHotelComponent } from './pages/find-hotel/find-hotel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find-hotel', component: FindHotelComponent},
  { path: 'hotel-detail', component: HotelDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'book-hotel', component: BookDetailComponent},
  { path: 'check-out', component: CheckoutDetailComponent}
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
