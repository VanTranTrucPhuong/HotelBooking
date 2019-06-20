import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-fill-in-details',
  templateUrl: './fill-in-details.component.html',
  styleUrls: ['./fill-in-details.component.css']
})
export class FillInDetailsComponent extends AppComponent implements OnInit {
  private originContactStatus = true;
  private bookCheckoutStatus = true;
  private countContinueBtnClick = 0;
  // Information's guest
  private _fullName: string;
  private _telephone: string;
  private _email: string;
  private btnContinueStatus = true;
  private conditionDismiss = "modal";

  constructor(protected utility: UtilityService, protected router: Router, protected _snackBar: MatSnackBar) {
    super(utility, router, _snackBar)
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
    let telephoneStr = countryCode.value + telephone.value;
    var regTelephone = /^[0-9]+$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this._fullName || !regTelephone.test(telephoneStr) || (this._telephone.length < 10) || !regEmail.test(this._email)){
      console.log("Tel: " + false);
      this.openSnackBarTop("Please check your input!","OK");
    } else {
      this.originContactStatus = false;
      this.btnContinueStatus = !this.btnContinueStatus;
      this.utility.setCheckOutStatus(true);
      $("#myModal").modal("hide");
    }
    console.log(this._fullName + ' ' + this._telephone + ' ' + this._email);
  }

  public openSnackBarTop(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      // here specify the position
      verticalPosition: 'top'
    });
}

}
