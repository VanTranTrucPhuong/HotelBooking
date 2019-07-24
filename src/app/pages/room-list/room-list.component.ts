import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  public roomList: [];
  public hotelID: any;

  public title: string;

  constructor(private utility: UtilityService, protected afDB: AngularFireDatabase) {
    this.utility.setDisplayHeader(true);
    this.utility.setDisplayHomeHeader(false);
    this.utility.setDisplayNavbar(true);
    this.utility.setDisplayInnerHeader(true);
    this.utility.setDisplayProcessBar(false);
    this.utility.setDisplayStarRating(true);
    this.utility.setTitle('Marriote NewYork City');
    this.hotelID = this.utility.popStackData().params.hotelItemID;
  }

  ngOnInit() {
    this.afDB.list(`/hotels/${this.hotelID}/rooms`).valueChanges().subscribe((result: any) => {
      this.roomList = result;
      console.log("List room", result);
    });
    // this.getParams();
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

  public getParams() {
    console.log("params: " +  typeof(this.utility.popStackData().params.hotelItemID));
    // this.hotelID = this.utility.popStackData().params.hotelItemID;
    // console.log("hotelID: " + this.hotelID);
    
    // return this.utility.popStackData().params.hotelItemID;
  }

}
