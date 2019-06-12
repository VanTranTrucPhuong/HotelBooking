import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(protected ultility: UtilityService) {
    ultility.setDisplayHeader(true);
    ultility.setDisplayHomeHeader(true);
    ultility.setDisplayInnerHeader(false);
    ultility.setDisplayNavbar(true);
    ultility.setDisplayStarRating(false);
  }

  public isDisplayHeader(): boolean {
    return this.ultility.isDisplayHeader();
  }

  public isDisplayHomeHeader(): boolean {
    return this.ultility.isDisplayHomeHeader();
  }

  public isDisplayInnerHeader(): boolean {
    return this.ultility.isDisplayInnerHeader();
  }

  public isDisplayNavbar(): boolean {
    return this.ultility.isDisplayNavbar();
  }

  public isDisplayProcessBar(): boolean {
    return this.ultility.isDisplayProcessBar();
  }

  public getTitle() {
    return this.ultility.getTitle();
  }

  public isDisplayStarRating(): boolean {
    return this.ultility.isDisplayStarRating();
  }
}
