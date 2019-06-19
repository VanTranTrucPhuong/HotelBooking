import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-find-hotel',
  templateUrl: './find-hotel.component.html',
  styleUrls: ['./find-hotel.component.css']
})
export class FindHotelComponent implements OnInit {

  title: string;

  constructor(private utility: UtilityService) {
    this.utility.setDisplayHeader(true);
    this.utility.setDisplayHomeHeader(false);
    this.utility.setDisplayInnerHeader(true);
    this.utility.setDisplayProcessBar(false);
    this.utility.setDisplayStarRating(true);
    this.utility.setTitle('Marriote NewYork City');
  }

  ngOnInit() {
  }

  // public isDisplayHeader(): boolean {
  //   return this.utility.isDisplayHeader();
  // }

  // public isDisplayHomeHeader(): boolean {
  //   return this.utility.isDisplayHomeHeader();
  // }

  // public isDisplayInnerHeader(): boolean {
  //   return this.utility.isDisplayInnerHeader();
  // }
}
