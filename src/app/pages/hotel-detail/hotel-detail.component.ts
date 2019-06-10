import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  constructor(private ultility: UtilityService) { 
    this.ultility.setDisplayNavbar(false);
  }

  ngOnInit() {
  }

  ngDestroy(){
    this.ultility.setDisplayNavbar(true);
  }

}
