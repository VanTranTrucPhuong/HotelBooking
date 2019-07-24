import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router'

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // Set up hide password
  public hide = true;

  firstName: '';
  surName: '';
  email: '';
  phoneNumber: '';
  password: '';
  confirmPassword: '';

  newUserObj = {
    firstName: '',
    surName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    // role: 'client'
  };

  constructor(
    protected utility: UtilityService,
    public afAuth: AngularFireAuth,
    public afDB: AngularFireDatabase,
    protected router: Router
  ) {
    this.utility.setDisplayHeader(true);
    this.utility.setDisplayHomeHeader(false);
    this.utility.setDisplayInnerHeader(true);
    this.utility.setDisplayProcessBar(false);
    this.utility.setDisplayNavbar(false);
    this.utility.setDisplayStarRating(false);
    this.utility.setTitle('Sign Up');

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }

  enableSignup() {
    return this.newUserObj.email.trim() != '' && (this.newUserObj.password.trim() != '' && this.newUserObj.confirmPassword.trim() != '') &&
      (this.newUserObj.password.trim() == this.newUserObj.confirmPassword.trim());
  }

  // firstName.value, surName.value,  email.value, phoneNumer.value, password.value, confirmPassword.value
  //   _password: string, _confirmPassword: string
  btnSignUp_click(_firstName: string, _surName: string, _email: string, _phoneNumber: string, _password: string, _confirmPassword: string) {
    console.log('page')
    let userObj = {
      userName: _firstName + ' ' + _surName,
      email: _email,
      phoneNumber: _phoneNumber,
      password: _password,
      confirmPassword: _confirmPassword,
      profilePicURL: ''
    }
    // console.log('userObj:', _firstName + _surName + _email + _phoneNumber + _password + _confirmPassword);

    this.afAuth.auth.createUserWithEmailAndPassword(userObj.email, userObj.password).then(user => {
      let username = userObj.email.split("@")[0];
      console.log('userObj', user, username);
      user.updateProfile({
        displayName: username,
        photoURL: ''
      })
      // user.displayName = username;
      this.afDB.object('/users/' + user.uid).set(userObj);
      alert("User has been created successfully")
    }).catch(function (error: any) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
    
    this.newUserObj = {
      firstName: '',
      surName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    };
    // this.router.navigate(['/LOGIN']);
  }

}
