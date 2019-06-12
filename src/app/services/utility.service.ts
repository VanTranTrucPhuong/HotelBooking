import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private _displayHeader = true;
  private _displayFooter = true;
  private _isDisplayNavbar = true;
  private _isShowHeaderButtonBack = true;
  private _displayHomeHeader = true;
  private _displayInnerHeader = true;
  private _isShowProcessBar =  true;
  private _title: string;
  private _displayStarRating = true;

  constructor() { }

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
}
