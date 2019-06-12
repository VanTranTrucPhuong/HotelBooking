import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

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

  // Set Title
  @Input() title: string;

  constructor(private ultility: UtilityService) {
    /**Setting Default Value **/
    this.title = '';
  }

  ngOnInit() {
  }

}
