import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';
import { PAGE_CODE, POPUP_CONFIRM } from './utilities/system.constants';
import { Router, NavigationStart, Event, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeout;
  routerChanged = true;

  constructor(protected utility: UtilityService, protected router: Router, protected _snackBar: MatSnackBar) {
    utility.setDisplayHeader(true);
    utility.setDisplayHeaderTitle(true);
    utility.setDisplayHomeHeader(true);
    utility.setDisplayInnerHeader(false);
    utility.setDisplayNavbar(true);
    utility.setDisplayStarRating(false);
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.routerChanged = true;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.timeout = setTimeout(() => {
          clearTimeout(this.timeout);
          this.routerChanged = false;
        }, 2000);
      }
    });
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

  public isDisplayBackButton(): boolean {
    return this.utility.isDisplayBackButton();
  }

  public isDisplayHeaderTitle(): boolean {
    return this.utility.isDisplayHeaderTitle();
  }

  public getTitle() {
    return this.utility.getTitle();
  }

  public isDisplayStarRating(): boolean {
    return this.utility.isDisplayStarRating();
  }

  public applyCheckOutStatus(): boolean {
    return this.utility.applyCheckOutStatus();
  }

  public applyPayStatus(): boolean {
    return this.utility.applyPayStatus();
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

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}

export interface StackData {
  params: any;
  data?: any;
  pageCode: PAGE_CODE;
}
