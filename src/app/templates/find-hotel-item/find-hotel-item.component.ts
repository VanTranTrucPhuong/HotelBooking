import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { AppComponent } from 'src/app/app.component';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-hotel-item',
  templateUrl: './find-hotel-item.component.html',
  styleUrls: ['./find-hotel-item.component.css']
})
export class FindHotelItemComponent implements OnInit {
  @Output() chooseHotel: EventEmitter<any> = new EventEmitter();

  constructor(
    protected utility: UtilityService,
    protected router: Router
  ) {
    // super(utility, router);
  }

  ngOnInit() {
  }

  protected pushPage(pageCode: PAGE_CODE, stackStatus: StackData = null) {
    try {
      console.log('Push page: ', pageCode);
      const myself = this;
      myself.utility.pushStackPage(pageCode, stackStatus);
      myself.router.navigate(['/' + pageCode]);
    } catch (error) {
      // Nothing
    }
  }

  public goToPage(pageCode: string) {
    alert(pageCode);
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

export interface StackData {
  params: any;
  data?: any;
  pageCode: PAGE_CODE;
}
