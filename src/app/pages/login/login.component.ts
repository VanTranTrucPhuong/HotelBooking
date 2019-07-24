import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponent implements OnInit {
  public userId: string;
  public password: string;
  // Set up hide password
  public hide = true;

  constructor(
    protected utility: UtilityService, 
    protected router: Router, 
    protected _snackBar: MatSnackBar,
    protected user: UserService,
    protected afAuth: AngularFireAuth, 
    private afDB:AngularFireDatabase
    ) {
    super(utility, router, _snackBar);
    this.utility.setDisplayNavbar(false);
    this.utility.setDisplayHeader(false);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public items: Observable<any[]>;

  ngOnInit() {
  }

  // Declare public function
  public btnLogin_click(_userID: string, _password: string) {
    try {
      this.userId = _userID;
      this.password = _password;
      if (this.checkValidation()) {
        return;
      } else {
        this.login();
        // send to API
        // if result success
        // this.goToPage('HOME');



      }
    } catch (exception) {
      // do nothing
    }
  }

  private checkValidation(): Boolean {
    // tslint:disable-next-line:prefer-const
    let validate;
    let isValidate = false;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regEmail.test(this.userId) || !this.userId || this.userId.length < 0) {
      isValidate = true;
    }
    if (!isValidate && (!this.password || this.password.length < 0)) {
      isValidate = true;
    }
    if (isValidate) {
      this.openSnackBar('Username or password invalid', 'OK');
    }
    return isValidate;
  }

  public goToPage(pageCode: string) {
    try {
      const targetPage = PAGE_CODE[pageCode];
      console.log(targetPage);
      if (targetPage) {
        this.pushPage(targetPage, {
          params: {},
          pageCode: PAGE_CODE.HOME
        });
      }
    } catch (error) {
      // Nothing
    }
  }

  public goToPageSignUp(pageCode: string) {
    try {
      const targetPage = PAGE_CODE[pageCode];
      console.log(targetPage);
      if (targetPage) {
        this.pushPage(targetPage, {
          params: {},
          pageCode: PAGE_CODE.SIGNUP
        });
      }
    } catch (error) {
      // Nothing
    }
  }

  public login(){    
    if(this.userId.trim() != "" && this.password.trim() != ""){
      this.user.login();
      this.afAuth.auth.signInWithEmailAndPassword(this.userId, this.password).then(auth =>{
        console.log('You are logged in', auth);
        this.afDB.object("/users/" + auth.uid).valueChanges().subscribe(data=>{
          // this.loading.dismiss();
          let userData: any = data;
          console.log("JSON: ", JSON.stringify(userData));
          localStorage.setItem("userObj", JSON.stringify(userData));
          // this.navCtrl.setRoot(MenuPage);
          this.goToPage('HOME');
        })        
      }).catch(error =>{
        console.log(error.message);
        this.openSnackBar(error.message, 'OK')
        // this.loading.dismiss();
      })
    }
  }



}
