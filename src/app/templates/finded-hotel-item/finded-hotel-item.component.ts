import { Component, OnInit } from '@angular/core';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { AppComponent } from 'src/app/app.component';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-finded-hotel-item',
  templateUrl: './finded-hotel-item.component.html',
  styleUrls: ['./finded-hotel-item.component.css']
})
export class FindedHotelItemComponent extends AppComponent implements OnInit {

  constructor(protected utility: UtilityService, protected router: Router, protected _snackBar: MatSnackBar) {
    super(utility, router, _snackBar);
    this.utility.setDisplayHeaderTitle(false);
  }

  ngOnInit() {
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

    }
  }

}
