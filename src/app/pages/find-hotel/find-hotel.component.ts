import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-find-hotel',
  templateUrl: './find-hotel.component.html',
  styleUrls: ['./find-hotel.component.css']
})
export class FindHotelComponent implements OnInit {

  title: string;

  constructor(private ultility: UtilityService) {
    this.ultility.setDisplayHeader(true);
    this.ultility.setDisplayHomeHeader(false);
    this.ultility.setDisplayInnerHeader(true);
    this.ultility.setDisplayProcessBar(false);
    this.ultility.setTitle('Marriote NewYork City');
  }

  ngOnInit() {
    console.log(this.ultility.getTitle());
  }

  // public isDisplayHeader(): boolean {
  //   return this.ultility.isDisplayHeader();
  // }

  // public isDisplayHomeHeader(): boolean {
  //   return this.ultility.isDisplayHomeHeader();
  // }

  // public isDisplayInnerHeader(): boolean {
  //   return this.ultility.isDisplayInnerHeader();
  // }

}
