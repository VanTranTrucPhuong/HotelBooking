import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { AppComponent } from 'src/app/app.component';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finded-hotel-item',
  templateUrl: './finded-hotel-item.component.html',
  styleUrls: ['./finded-hotel-item.component.css']
})
export class FindedHotelItemComponent extends AppComponent implements OnInit {
  @Input() hotelItem;
  @Output() eventChooseHotel = new EventEmitter();

  constructor(
    protected utility: UtilityService,
    protected router: Router,
    protected _snackBar: MatSnackBar,
    config: NgbRatingConfig
  ) {
    super(utility, router, _snackBar);
    this.utility.setDisplayHeaderTitle(false);
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
  }

  public goToPage(pageCode: string) {
    try {
      const targetPage = PAGE_CODE[pageCode];
      console.log("targetPage", targetPage);
      if (targetPage) {
        this.pushPage(targetPage, {
          params: {
            hotelItemID: this.hotelItem.hotelID
          },
          pageCode: PAGE_CODE.FINDEDHOTELLIST
        });
      }
    } catch (error) {

    }
  }

  public chooseHotel(){
    console.log(this.hotelItem);  
    this.eventChooseHotel.emit(this.hotelItem);
    this.goToPage('ROOMLIST');
    
  }

}
