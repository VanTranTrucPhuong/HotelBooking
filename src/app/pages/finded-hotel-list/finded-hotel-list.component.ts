import { Component, OnInit, Input, ViewChildren, AfterViewInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { HotelManagementService } from 'src/app/services/hotel-management.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-finded-hotel-list',
  templateUrl: './finded-hotel-list.component.html',
  styleUrls: ['./finded-hotel-list.component.css']
})
export class FindedHotelListComponent implements OnInit, AfterViewInit {

  public titleSearch: string;

  // hotelLists
  public hotelList: [];
  public searchItemCount: number;

  constructor(
    private utility: UtilityService,
    protected afDB: AngularFireDatabase,
    private hotelManagementService: HotelManagementService,
    private firebaseService: FirebaseService) {
    this.utility.setDisplayHeader(true);
    this.utility.setDisplayInnerHeader(false);
    this.utility.setDisplayBackButton(true);
    this.utility.setDisplayHeaderTitle(false);
    this.utility.setDisplayHomeHeader(true);
    this.utility.setDisplayNavbar(true);
    this.utility.setDisplayProcessBar(false);
    this.utility.setDisplayStarRating(false);
    this.getStoreData();
    this.utility.setTitle(this.titleSearch);
  }

  ngOnInit() {
    this.getHotelList();
  }

  ngAfterViewInit() {
  
  }

  public getStoreData() {
    // try some HTTP request:
    this.hotelManagementService.dataSearchForm.subscribe((result) => {
      this.titleSearch = result.distination;
    });
  }

  public getHotelList(){
    this.firebaseService.get('/hotels').subscribe((result: any) => {
      this.hotelList = result;
      console.log(this.hotelList);
    })
  }

  public chooseHotel(hotelItem: any) {
    console.log(hotelItem.hotelID);
    // alert('hello');
  }

}
