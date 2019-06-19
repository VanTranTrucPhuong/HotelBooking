import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';
import { PAGE_CODE } from './utilities/system.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(protected utility: UtilityService, protected router: Router) {
    utility.setDisplayHeader(true);
    utility.setDisplayHomeHeader(true);
    utility.setDisplayInnerHeader(false);
    utility.setDisplayNavbar(true);
    utility.setDisplayStarRating(false);
  }

  public isDisplayHeader(): boolean {
    return this.utility.isDisplayHeader();
  }

  public isDisplayHomeHeader(): boolean {
    return this.utility.isDisplayHomeHeader();
  }

  public isDisplayInnerHeader(): boolean {
    return this.utility.isDisplayInnerHeader();
  }

  public isDisplayNavbar(): boolean {
    return this.utility.isDisplayNavbar();
  }

  public isDisplayProcessBar(): boolean {
    return this.utility.isDisplayProcessBar();
  }

  public getTitle() {
    return this.utility.getTitle();
  }

  public isDisplayStarRating(): boolean {
    return this.utility.isDisplayStarRating();
  }

  protected applyCheckOutStatus(): boolean {
    return this.utility.applyCheckOutStatus();
  }

  protected pushPage(pageCode: PAGE_CODE, stackStatus: StackData = null) {
    try {
      console.log('Push page: ', pageCode);
      // if (pageCode === PAGE_CODE.VERSION || pageCode === PAGE_CODE.EXCEPTION) {
      //   this.router.navigate(['/' + pageCode]);
      // } else {
        const dispId = pageCode.substring(4);
        const myself = this;
        // this.webServices.getInvalidateUserAcntKbn(SystemHelper.acntID, SystemHelper.acntSbt, dispId, function (result: any) {
        //   const data: ResYukoAcntUserInf = result;
        //   if (data) {
        //     if (data.errorCode === '0') {
        //       myself.utility.pushStackPage(pageCode, stackStatus);
        //       myself.router.navigate(['/' + pageCode]);
        //     }
        //   }
        // });
        myself.utility.pushStackPage(pageCode, stackStatus);
        myself.router.navigate(['/' + pageCode]);
      // }
    } catch (error) {
      // Nothing
    }
  }
}

export interface StackData {
  params: any;
  data?: any;
  pageCode: PAGE_CODE;
}
