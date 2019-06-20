import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-finded-hotel-list',
  templateUrl: './finded-hotel-list.component.html',
  styleUrls: ['./finded-hotel-list.component.css']
})
export class FindedHotelListComponent implements OnInit {

  constructor(private utility: UtilityService) {
    this.utility.setDisplayHeader(true);
    this.utility.setDisplayBackButton(true);
    this.utility.setDisplayHeaderTitle(false);
    this.utility.setDisplayHomeHeader(true);
    this.utility.setDisplayNavbar(true);
    this.utility.setDisplayProcessBar(false);
    this.utility.setTitle('NewYork City');
  }

  ngOnInit() {
  }

}
