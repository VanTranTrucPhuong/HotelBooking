import { Injectable } from '@angular/core';
import { PAGE_CODE } from '../utilities/system.constants';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private _displayHeader = true;
  private _displayFooter = true;
  private _isDisplayNavbar = true;
  private _isShowHeaderButtonBack = true;
  private _displayHomeHeader = false;
  private _displayInnerHeader = true;
  private _isShowProcessBar = true;
  private _checkOutStatus = false;
  private _payStatus = false;
  private _title: string;
  private _displayStarRating = true;
  // Declare for PopUp
  private popupTitle: string;
  private popupMessage: string;
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
    this._displayHeader = isShow;
  }
  public isDisplayHeader() {
    return this._displayHeader;
  }
  public setDisplayHomeHeader(isShow: boolean) {
    this._displayHomeHeader = isShow;
  }
  public isDisplayHomeHeader() {
    return this._displayHomeHeader;
  }
  public setDisplayInnerHeader(isShow: boolean) {
    this._displayInnerHeader = isShow;
  }
  public isDisplayInnerHeader() {
    return this._displayInnerHeader;
  }

  // Set Display Footer
  public setDisplayFooter(isShow: boolean) {
    this._displayFooter = isShow;
  }
  public isDisplayFooter() {
    return this._displayFooter;
  }

  // Set Display Navbar(~ Navigation)
  public setDisplayNavbar(isShow: boolean) {
    this._isDisplayNavbar = isShow;
  }
  public isDisplayNavbar() {
    return this._isDisplayNavbar;
  }
  public isShowHeaderButton() {
    return this._isShowHeaderButtonBack;
  }
  public setShowHeaderButtonBack(isShow: boolean) {
    this._isShowHeaderButtonBack = isShow;
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
    return this._isShowProcessBar;
  }

  public setDisplayProcessBar(isShow: boolean) {
    this._isShowProcessBar = isShow;
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

  // Config PopUp
  public getPopupTitle(): string {
    return this.popupTitle;
  }
  public setPopupTitle(title) {
    this.popupTitle = title;
  }
  public getPopupMessage(): string {
    return this.popupMessage;
  }
  public setPopupMessage(msg) {
    this.popupMessage = msg;
  }

  private popStackData(): StackData {
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
