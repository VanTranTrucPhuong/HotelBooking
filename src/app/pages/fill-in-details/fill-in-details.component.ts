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
  private btnContinueStatus = true;

  constructor(private utility: UtilityService) {
    this.utility.setDisplayHeader(true);
    this.utility.setDisplayHomeHeader(false);
    this.utility.setDisplayInnerHeader(true);
    this.utility.setDisplayProcessBar(true);
    this.utility.setDisplayStarRating(false);
    this.utility.setDisplayNavbar(false);
    this.utility.setCheckOutStatus(false);
    this.utility.setPayStatus(false);
    this.utility.setTitle('Fill In Details');
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
      // this.originContactStatus = false;
      this.bookCheckoutStatus = false;
      this.utility.setPayStatus(true);
    }
    // else if (this.countContinueBtnClick === 2) {
    // }
    // console.log(this.countContinueBtnClick);
  }

  public getInformationGuest(fullName: any, countryCode: any, telephone: any, email: any) {
    this._fullName = fullName.value;
    this._telephone = '+' + countryCode.value + ' ' + telephone.value;
    this._email = email.value;
    if (this._fullName && this._telephone && this._email) {
      this.originContactStatus = false;
      this.btnContinueStatus = !this.btnContinueStatus;
      this.utility.setCheckOutStatus(true);
    }
    console.log(this._fullName + ' ' + this._telephone + ' ' + this._email);
  }

}
