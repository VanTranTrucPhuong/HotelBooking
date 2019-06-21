import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isDisplayHeader: Boolean;
  @Input() isDisplayHeaderTitle: Boolean;
  @Input() isDisplayBackButton: Boolean;
  @Input() isDisplayHomeHeader: Boolean; // Header In Home Screen
  @Input() isDisplayInnerHeader: Boolean; // Header In Another Screen
  @Input() isDisplayProcessBar: Boolean;
  @Input() isDisplayStarRating: Boolean;
  @Input() processBarStatus: Boolean;
  @Input() applyCheckOutStatus: Boolean;
  @Input() applyPayStatus: Boolean;

  private readonly BACK_PAGE_TYPE = {
    CONFIRM_POPUP: 1,
    DEFINED: 2,
    STACK: 3
  };

  // Set Title
  @Input() title: string;

  constructor(private utility: UtilityService, private router: Router) {
    /**Setting Default Value **/
    this.title = '';
  }

  ngOnInit() {
  }

  public btnBack_click() {
    const currentPage = this.utility.getLastPageOfStack();
    // const currentPage = this.utility.popStackPage();
    if (!currentPage) {
      return;
    }
    // tslint:disable-next-line:prefer-const
    let isCheck = true;
    // tslint:disable-next-line:prefer-const
    let _page;
    const backType = this.BACK_PAGE_TYPE.DEFINED;
    switch (currentPage) {
      case PAGE_CODE.DEFAULT:
      case PAGE_CODE.SIGNUP:
        _page = PAGE_CODE.DEFAULT;
        this.router.navigate(['/' + _page]);
        break;
      case PAGE_CODE.FINDEDHOTELLIST:
        _page = PAGE_CODE.HOME;
        break;
      case PAGE_CODE.FINDHOTEL:
        _page = PAGE_CODE.FINDEDHOTELLIST;
        break;
      case PAGE_CODE.HOTELDETAIL:
        console.log('PREV: ' + this.utility.getPreviousLastPageOfStack());
        if (this.utility.getPreviousLastPageOfStack() === 'HOME') {
          _page = PAGE_CODE.HOME;
        } else {
          _page = PAGE_CODE.FINDHOTEL;
        }
        break;
      case PAGE_CODE.FILLINDETAILS:
        // this.countBtnBackClick++;
        // if (this.countBtnBackClick ===  2) {
        _page = PAGE_CODE.HOTELDETAIL;
        // }
        break;
      default:
        break;
    }
    // alert('currentPage: ' + currentPage);
    if (isCheck) {
      if (this.BACK_PAGE_TYPE.DEFINED === backType) {
        const page = this.utility.popToPageByPageCode(_page);
        if (page) {
          this.router.navigate(['/' + page]);
        }
      } else if (this.BACK_PAGE_TYPE.STACK === backType) {
        const popPage = this.utility.popStackPage();
        alert('popPage: ' + popPage);
        if (popPage) {
          this.router.navigate(['/' + popPage]);
        }
      }
    }
  }

}
