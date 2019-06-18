import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { PAGE_CODE } from 'src/app/utilities/system.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isDisplayHeader: Boolean;
  @Input() isDisplayHomeHeader: Boolean; // Header In Home Screen
  @Input() isDisplayInnerHeader: Boolean; // Header In Another Screen
  @Input() isDisplayProcessBar: Boolean;
  @Input() isDisplayStarRating: Boolean;

  private readonly BACK_PAGE_TYPE = {
    CONFIRM_POPUP: 1,
    DEFINED: 2,
    STACK: 3
  };

  // Set Title
  @Input() title: string;

  constructor(private ultility: UtilityService) {
    /**Setting Default Value **/
    this.title = '';
  }

  ngOnInit() {
  }

  public btnBack_click() {
    const currentPage = this.ultility.getLastPageOfStack();
    alert (currentPage);
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
      case PAGE_CODE.FINDHOTEL:
        _page = PAGE_CODE.DEFAULT;
    }
  }

}
