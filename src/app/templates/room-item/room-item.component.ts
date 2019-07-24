import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { AppComponent } from 'src/app/app.component';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() roomItem: any;
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
