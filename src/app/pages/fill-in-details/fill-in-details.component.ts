import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-fill-in-details',
  templateUrl: './fill-in-details.component.html',
  styleUrls: ['./fill-in-details.component.css']
})
export class FillInDetailsComponent implements OnInit {
  private contactStatus = true;
  private bookCheckoutStatus = true;
  private countContinueBtnClick = 0;

  constructor(private ultility: UtilityService) {
    this.ultility.setDisplayHeader(true);
    this.ultility.setDisplayHomeHeader(false);
    this.ultility.setDisplayInnerHeader(true);
    this.ultility.setDisplayProcessBar(true);
    this.ultility.setDisplayStarRating(false);
    this.ultility.setDisplayNavbar(false);
    this.ultility.setTitle('Fill In Details');
  }

  ngOnInit() {
  }

  public FillInContinue() {
    this.countContinueBtnClick++;
    if (this.countContinueBtnClick === 1) {
      this.contactStatus = false;
    } else if (this.countContinueBtnClick === 2) {
      this.bookCheckoutStatus = false;
    }
    // console.log(this.countContinueBtnClick);
  }


}
