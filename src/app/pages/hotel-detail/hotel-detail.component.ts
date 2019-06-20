import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})

export class HotelDetailComponent extends AppComponent implements OnInit {

  constructor(protected  utility: UtilityService, protected router: Router, protected _snackBar: MatSnackBar) {
    super(utility, router, _snackBar)
    utility.setDisplayBackButton(true);
    utility.setDisplayHeaderTitle(false);
    utility.setDisplayNavbar(false);
    utility.setTitle('Marriote NewYork City');
  }

  ngOnInit() {
  }

  public goToPage(pageCode: string) {
    // alert(pageCode);
    try {
      const targetPage = PAGE_CODE[pageCode];
      console.log(targetPage);
      if (targetPage) {
        this.pushPage(targetPage, {
          params: {},
          pageCode: PAGE_CODE.HOTELDETAIL
        });
      }
    } catch (error) {
      // Nothing
    }
  }


}
