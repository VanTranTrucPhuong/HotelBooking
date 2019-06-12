import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find-hotel-item',
  templateUrl: './find-hotel-item.component.html',
  styleUrls: ['./find-hotel-item.component.css']
})
export class FindHotelItemComponent implements OnInit {
  @Output() chooseHotel: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
