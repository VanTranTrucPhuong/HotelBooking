import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private _displayHeader = true;
  private _displayFooter = true;
  private _isDisplayNavbar = true;

  constructor() { }

  public setDisplayHeader(isShow: boolean) {
    this._displayHeader = isShow;
  }
  public isDisplayHeader() {
    return this._displayHeader;
  }
  public setDisplayFooter(isShow: boolean) {
    this._displayFooter = isShow;
  }
  public isDisplayFooter() {
    return this._displayFooter;
  }
  public setDisplayNavbar(isShow: boolean){
    this._isDisplayNavbar = isShow;
  }
  public isDisplayNavbar(){
    return this._isDisplayNavbar;
  }
}
