import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private _displayHeader = true;

  constructor() { }

  public setDisplayHeader(isShow: boolean) {
    this._displayHeader = isShow;
  }
  public isDisplayHeader() {
    return this._displayHeader;
  }
}
