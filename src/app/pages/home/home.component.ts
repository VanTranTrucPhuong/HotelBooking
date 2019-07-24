import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppComponent } from './../../app.component';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { } from 'plugins/cordova-plugin-keyboard/www/keyboard.js';
import { AngularFireDatabase } from 'angularfire2/database';
import { stringify } from '@angular/compiler/src/util';
import { Observable, Subscription } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HotelManagementService } from 'src/app/services/hotel-management.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

declare const $;
declare let Keyboard: any;
declare global {
  interface Window { Keyboard: any; }
}
declare const myTest: any;
declare const inputNumber: any;
declare const configAlgolia: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<any>();
  public isEnableButtonSearch: boolean = true;
  public search: string;

  // Date Range
  dateRangeDisp = { 'begin': Date, 'end': Date };

  // Declare variable of DateRangePicker
  public duration: any = '';
  public beginDate: any;
  public endDate: any;
  public hotelList = [];

  subDanhSachPhim: Subscription;
  
  public hotelListRecent = [
    { name: 'NewYork City', price: '200 USD', description: 'Some example text', image: './assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg' },
    { name: 'White Palace', price: '170 USD', description: 'Some example text', image: './assets/images/hotel.jpg' },
    { name: 'King Hotel', price: '150 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' },
    { name: 'NEC Hotel', price: '1200 USD', description: 'Some example text', image: './assets/images/room.jpg' }
  ];

  constructor(
    protected utility: UtilityService,
    protected router: Router,
    protected _snackbar: MatSnackBar,
    private afDB: AngularFireDatabase,
    private hotelManagementService: HotelManagementService
  ) {
    super(utility, router, _snackbar);
    utility.setDisplayHeader(true);
    utility.setDisplayHomeHeader(true);
    utility.setDisplayInnerHeader(false);
    utility.setDisplayNavbar(true);
    utility.setDisplayHeaderTitle(true);
    utility.setDisplayBackButton(false);
  }

  ngOnInit() {
    inputNumber($('.input-number'));
    configAlgolia();
    console.log(window.location);
    
  }


  convertTime(str) {
    var date = new Date(str),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [month, day, date.getFullYear()].join("/");
  }

  saveDate(event: any) {
    let diffDate: any;
    // look at how the date is emitted from save
    console.log(event.target.value.begin);
    console.log(event.target.value.end);

    this.beginDate = new Date(this.convertTime(event.target.value.begin)).getTime();
    this.endDate = new Date(this.convertTime(event.target.value.end)).getTime();
    diffDate = (this.endDate - this.beginDate) / (24 * 3600 * 1000);
    this.duration = diffDate + ' night(s)';
    // change in view
    this.dateRangeDisp = event.target.value;
  }
  // public isDisplayHeader(): boolean {
  //   return this.utility.isDisplayHeader();
  // }

  // public isDisplayHomeHeader(): boolean {
  //   return this.utility.isDisplayHomeHeader();
  // }

  // public isDisplayInnerHeader(): boolean {
  //   return this.utility.isDisplayInnerHeader();
  // }

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

  // ngOnDestroy() {
  // }

  // Search Hotel
  sendSearch() {
    console.log('SendSearch', this.search);
    this.hotelManagementService.setSearchFormData({ distination: this.search, checkInDate: '', checkOutDate: '', duration: this.duration, noOfGuest: '' });
    this.goToPage('FINDEDHOTELLIST');
  }

  ngOnDestroy(){
    //Transfer different component
    console.log("ngOnDestroy");
  }
}
