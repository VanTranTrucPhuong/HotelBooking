import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { PAGE_CODE } from 'src/app/utilities/system.constants';
import { MbscScrollerOptions } from './../../../lib/mobiscroll/js/mobiscroll.angular.min.js';
// import { AppComponent } from 'src/app/app.component';'

// Declare mobiscroll
const guestValues: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const roomValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

declare const $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponent implements OnInit {
  scrollerOptions: MbscScrollerOptions = {
    theme: 'ios',
    wheels: [
      [{
        circular: false,
        data: guestValues,
        label: 'Guest'
      },
      {
        circular: false,
        data: roomValues,
        label: 'Room'
      }],
    ],
    showLabel: true,
    formatValue: (data) => {
      return data[0] + ' guests - ' + data[1] + ' rooms';
    }
  };
  // Declare variable of DateRangePicker
  public duration: any = '';


  private hotelListRecent = [
    // tslint:disable-next-line:max-line-length
    { name: 'California', price: '200.000 USD', description: 'Some example text', image: './assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg' },
    { name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' },
    { name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' },
    { name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg' }
  ];

  constructor(
    protected utility: UtilityService,
    protected router: Router
  ) {
    super(utility, router);
    utility.setDisplayHeader(true);
    utility.setDisplayHomeHeader(true);
    utility.setDisplayInnerHeader(false);
    utility.setDisplayNavbar(true);
  }

  ngOnInit() {
  }


  public getDateRangePicker() {
    let diffDate: any;
    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    });
    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
      const startDate = new Date(picker.startDate).getTime();
      const endDate = new Date(picker.endDate).getTime();
      diffDate = (endDate - startDate) / (24 * 3600 * 1000);
      // tslint:disable-next-line:radix
      this.duration = parseInt(diffDate);
      $('#duration').val(this.duration + ' nights');
    });
    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
      $('#duration').val('');
    });
  }
  // public isDisplayHeader(): boolean {
  //   return this.utility.isDisplayHeader();
  // }

  // public isDisplayHomeHeader(): boolean {
  //   return this.utility.isDisplayHomeHeader();
  // }

  // public isDisplayInnerHeader(): boolean {
  //   return this.utility.isDisplayInnerHeader();
  // }

  public goToFindHotel() {
    this.router.navigate(['/find-hotel']);
  }

  public goToDetail() {
    this.router.navigate(['/hotel-detail']);
  }

  public goToPage(pageCode: string) {
    alert('GotoPage');
    try {
      const targetPage = PAGE_CODE[pageCode];
      console.log(targetPage);
      if (targetPage) {
        this.pushPage(targetPage, {
          params: {},
          pageCode: PAGE_CODE.FINDHOTEL
        });
      }
    } catch (error) {

    }
  }

  // ngOnDestroy() {
  // }
}
