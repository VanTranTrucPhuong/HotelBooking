import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userRole: any = {};
  public isAuthenticated: boolean = false;
  private userObj: any = {};
  private tempUserObj ={
  }
  currentUser: any = '';

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
    console.log('Hello UserProvider Provider');
    // this.getCurrentUser();
  }

  login(){
    this.isAuthenticated = true;
  }

  logout(){
    this.isAuthenticated = false;
  }

  isAlreadyAuthenticated():boolean{
    return this.isAuthenticated? true : false;
  }

  isUserAuthenticated(){
    if(localStorage.getItem("userObj")){
      this.isAuthenticated = true;
      return true
    }
    else{
      this.isAuthenticated = false;
      return false  
    }
  }

  getCurrentUser(){
    let user = firebase.auth().currentUser;
    if(user){
      console.log('Current User', user.uid);
      return user.uid
    }
    else{
      console.log("Not logged in");
    }
  }
}
