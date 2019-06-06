import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel-detail', component: HotelDetailComponent}
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
