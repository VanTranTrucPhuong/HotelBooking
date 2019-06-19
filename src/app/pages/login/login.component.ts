import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponent implements OnInit {
  public userId: string;
  public password: string;

  constructor(protected utility: UtilityService, protected router: Router, protected _snackBar: MatSnackBar) {
    super(utility, router, _snackBar);
    this.utility.setDisplayNavbar(false);
    this.utility.setDisplayHeader(false);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }

  // Declare public function
  public btnLogin_click(_userID: string, _password: string) {
    try {
      this.userId = _userID;
      this.password = _password;
      if (this.checkValidation()) {
        return;
      }

    } catch (exception) {
      // do nothing
    }
  }

  private checkValidation(): Boolean {
    let validate;
    let isValidate = false;
    if (!this.userId || this.userId.length < 0) {
      validate = ('UserID not input');
      isValidate = true;
    }
    if (!isValidate && (!this.password || this.password.length < 0)) {
      validate = ('Password not input');
      isValidate = true;
    }
    if (isValidate) {
      this.openSnackBar('Username or password invalid', 'OK');
    }
    return isValidate;
  }

}
