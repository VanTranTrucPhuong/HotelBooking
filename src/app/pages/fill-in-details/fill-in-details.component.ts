import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-fill-in-details',
  templateUrl: './fill-in-details.component.html',
  styleUrls: ['./fill-in-details.component.css']
})
export class FillInDetailsComponent implements OnInit {

  constructor(private ultility: UtilityService) {
    this.ultility.setDisplayHeader(true);
    this.ultility.setDisplayHomeHeader(false);
    this.ultility.setDisplayInnerHeader(true);
    this.ultility.setDisplayProcessBar(true);
    this.ultility.setDisplayStarRating(false);
    this.ultility.setTitle('Fill In Details');
  }

  ngOnInit() {
  }

}
