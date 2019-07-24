import { Injectable } from '@angular/core';
import { PAGE_CODE } from '../utilities/system.constants';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private _isDisplayHeader = true;
  private _isDisplayFooter = true;
  private _isDisplayNavbar = true;
  private _isDisplayBackButton = false;
  private _isDisplayHeaderTitle = true;
  private _isDisplayHomeHeader = false;
  private _isDisplayInnerHeader = true;
  private _isDisplayProcessBar = true;
  private _checkOutStatus = false;
  private _payStatus = false;
  private _title: string;
  private _displayStarRating = true;
  // Back Page
  private stackPage: PAGE_CODE[] = [PAGE_CODE.DEFAULT];
  private stackMapping = new Map<number, StackData>().set(0, { 'params': {}, 'pageCode': PAGE_CODE.DEFAULT, 'data': {} });
  private stackData: StackData;
  private dataOfPrevPage: StackData;

  constructor() { }

  public getDataOfPrevPage(): StackData {
    return this.dataOfPrevPage;
  }
  public setDataOfPrevPage(data: StackData) {
    this.dataOfPrevPage = data;
  }

  // Set Display Header
  public setDisplayHeader(isShow: boolean) {
    this._isDisplayHeader = isShow;
  }
  public isDisplayHeader() {
    return this._isDisplayHeader;
  }
  public setDisplayHomeHeader(isShow: boolean) {
    this._isDisplayHomeHeader = isShow;
  }
  public isDisplayHomeHeader() {
    return this._isDisplayHomeHeader;
  }
  public setDisplayInnerHeader(isShow: boolean) {
    this._isDisplayInnerHeader = isShow;
  }
  public isDisplayInnerHeader() {
    return this._isDisplayInnerHeader;
  }

  // Set Display Footer
  public setDisplayFooter(isShow: boolean) {
    this._isDisplayFooter = isShow;
  }
  public isDisplayFooter() {
    return this._isDisplayFooter;
  }

  // Set Display Navbar(~ Navigation)
  public setDisplayNavbar(isShow: boolean) {
    this._isDisplayNavbar = isShow;
  }
  public isDisplayNavbar() {
    return this._isDisplayNavbar;
  }
  public isDisplayBackButton() {
    return this._isDisplayBackButton;
  }
  public setDisplayBackButton(isShow: boolean) {
    this._isDisplayBackButton = isShow;
  }
  public isDisplayHeaderTitle() {
    return this._isDisplayHeaderTitle;
  }
  public setDisplayHeaderTitle(isShow: boolean) {
    this._isDisplayHeaderTitle = isShow;
  }


  // Set Title
  public getTitle() {
    return this._title;
  }
  public setTitle(title: string) {
    this._title = title;
  }

  // Set Display Processbar
  public isDisplayProcessBar() {
    return this._isDisplayProcessBar;
  }

  public setDisplayProcessBar(isShow: boolean) {
    this._isDisplayProcessBar = isShow;
  }

  // Set Display Star Rating
  public isDisplayStarRating() {
    return this._displayStarRating;
  }

  public setDisplayStarRating(isShow: boolean) {
    this._displayStarRating = isShow;
  }

  // Set status of ProcessBar
  public setCheckOutStatus(isApply: boolean) {
    this._checkOutStatus = isApply;
  }
  public applyCheckOutStatus() {
    return this._checkOutStatus;
  }
  public setPayStatus(isApply: boolean) {
    this._payStatus = isApply;
  }
  public applyPayStatus() {
    return this._payStatus;
  }


  public popStackData(): StackData {
    const rs: StackData = this.stackMapping.get(this.stackPage.length - 1);
    this.stackMapping.delete(this.stackPage.length - 1);
    return rs;
  }

  public popToRoot(): PAGE_CODE {
    this.stackMapping = new Map<number, StackData>().set(0, { 'params': {}, 'pageCode': PAGE_CODE.DEFAULT, 'data': {} });
    this.stackPage = [PAGE_CODE.DEFAULT];
    return PAGE_CODE.DEFAULT;
  }

  public popStackPage(): PAGE_CODE {
    if (!this.stackPage) {
      this.stackMapping.clear();
      this.stackPage = [PAGE_CODE.DEFAULT];
      return PAGE_CODE.DEFAULT;
    }
    if (this.stackPage.length > 1) {
      this.stackData = this.popStackData();
      if (!this.stackData) {
        this.stackData = {
          'params': {},
          'pageCode': null,
          'data': {}
        };
      }
      this.stackPage.pop();
      // save data
      const dataPrev: StackData = {
        'data': this.stackData.data,
        'pageCode': this.stackData.pageCode,
        'params': {}
      };
      this.setDataOfPrevPage(dataPrev);
      return this.stackPage[this.stackPage.length - 1];
    }
    return null;
  }

  public popToPageByPageCode(pageCode: PAGE_CODE): PAGE_CODE {
    if (this.stackPage) {
      if (this.stackPage.includes(pageCode)) {
        for (let idx = this.stackPage.length - 1; idx > 0; idx--) {
          if (this.stackPage[idx] && this.stackPage[idx] === pageCode) {
            return pageCode;
          } else {
            this.popStackPage();
          }
        }
      } else {
        this.popStackPage();
        this.pushStackPage(pageCode, this.stackData);
        return pageCode;
      }
    }
    return null;
  }

  public pushStackPage(pageCode: PAGE_CODE, stackStatus: StackData = null, isSaveData: boolean = true) {
    if (!this.stackPage) {
      this.stackPage = [PAGE_CODE.DEFAULT];
      this.stackMapping = new Map<number, StackData>().set(0, { 'params': {}, 'pageCode': PAGE_CODE.DEFAULT, 'data': {} });
    }
    // check last page code is sampe page, is't
    const currentPage = this.stackPage[this.stackPage.length - 1];
    if (currentPage === pageCode) {
      return;
    }

    this.stackPage.push(pageCode);
    let stackDt = stackStatus;
    if (!stackDt) {
      stackDt = {
        'params': {},
        'pageCode': currentPage,
        'data': {}
      };
    }
    this.stackMapping.set(this.stackPage.length - 1, stackDt);
    this.stackData = stackDt;
    // save data
    if (isSaveData) {
      const dataPrev: StackData = {
        'data': stackDt.params,
        'pageCode': pageCode,
        'params': {}
      };
      this.setDataOfPrevPage(dataPrev);
    }
  }

  public getLastPageOfStack(): PAGE_CODE {
    if (this.stackPage && this.stackPage.length > 1) {
      return this.stackPage[this.stackPage.length - 1];
    }
    return null;
  }

  public getPreviousLastPageOfStack(): PAGE_CODE {
    if (this.stackPage && this.stackPage.length > 1) {
      return this.stackPage[this.stackPage.length - 2];
    }
    return null;
  }
}

export interface StackData {
  params: any;
  data?: any;
  pageCode: PAGE_CODE;
}
