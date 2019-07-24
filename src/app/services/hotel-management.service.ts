import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelManagementService {
  // Save Data In Search Form
  private storeSearchForm = new BehaviorSubject({distination: 'NewYork', checkInDate: '', checkOutDate: '', duration: '', noOfGuest: ''});
  public dataSearchForm = this.storeSearchForm.asObservable(); 

  constructor() { }

  public setSearchFormData(searchFormData){
    this.storeSearchForm.next(searchFormData);
  }
}
