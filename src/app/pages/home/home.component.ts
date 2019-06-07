import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private hotelListRecent = [
    // tslint:disable-next-line:max-line-length
    {name: 'California', price: '200.000 USD', description: 'Some example text', image: './assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'}
  ];

  constructor(
    protected utility: UtilityService,
    protected router: Router
  ) {
    utility.setDisplayHeader(true);
  }

  ngOnInit() {
  }

  public isDisplayHeader(): boolean {
    return this.utility.isDisplayHeader();
  }

  goToDetail() {
    this.router.navigate(['/hotel-detail']);
  }
}
