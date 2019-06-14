import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { FormControl, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-fill-in-details',
  templateUrl: './fill-in-details.component.html',
  styleUrls: ['./fill-in-details.component.css']
})
export class FillInDetailsComponent implements OnInit {
  private originContactStatus = true;
  private bookCheckoutStatus = true;
  private countContinueBtnClick = 0;
  // Information's guest
  private _fullName: string;
  private _telephone: string;
  private _email: string;

  constructor(private ultility: UtilityService) {
    this.ultility.setDisplayHeader(true);
    this.ultility.setDisplayHomeHeader(false);
    this.ultility.setDisplayInnerHeader(true);
    this.ultility.setDisplayProcessBar(true);
    this.ultility.setDisplayStarRating(false);
    this.ultility.setDisplayNavbar(false);
    this.ultility.setTitle('Fill In Details');
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }

  public FillInContinue() {
    this.countContinueBtnClick++;
    if (this.countContinueBtnClick === 1) {
      this.originContactStatus = false;
    } else if (this.countContinueBtnClick === 2) {
      this.bookCheckoutStatus = false;
    }
    // console.log(this.countContinueBtnClick);
  }

  public getInformationGuest(fullName: any, countryCode: any, telephone: any, email: any) {
    this._fullName = fullName.value;
    this._telephone = '+' + countryCode.value + ' ' + telephone.value;
    this._email = email.value;
    if (this._fullName && this._telephone && this._email) {
      this.originContactStatus = false;
    }
    console.log(this._fullName + ' ' + this._telephone + ' ' + this._email);
  }

}
