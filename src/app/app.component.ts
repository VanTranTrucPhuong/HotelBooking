import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelBooking';

  constructor(protected utility: UtilityService) {
    utility.setDisplayHeader(true);
  }

  public isDisplayHeader(): boolean {
    return this.utility.isDisplayHeader();
  }
}
