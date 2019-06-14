import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
import { UtilityService } from 'src/app/services/utility.service';


declare const $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    protected utility: UtilityService,
    protected router: Router
  ) {
    utility.setDisplayHeader(true);
    utility.setDisplayHomeHeader(true);
    utility.setDisplayInnerHeader(false);
  }
  private hotelListRecent = [
    // tslint:disable-next-line:max-line-length
    {name: 'California', price: '200.000 USD', description: 'Some example text', image: './assets/images/Mandarin-Oriental-Barcelona-5-star-luxury-hotel-accomodation-on-famous-street-passeige-de-gracia-in-the-centre-of-the-city.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'},
    {name: 'White Palace', price: '150 000 USD', description: 'Some example text', image: './assets/images/tivkumb_0.jpg'}
  ];


  ngOnInit() {
    console.log($);
    $('button').click(function() {
      console.log('okokoko');
    });
    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });
    // $(function() {
    //   (<any>$('input[name="datefilter"]')).daterangepicker({
    //       autoUpdateInput: false,
    //       locale: {
    //           cancelLabel: 'Clear'
    //       }
    //   });
    //   $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
    //       $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    //   });
    //   $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
    //       $(this).val('');
    //   });
    // });
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

  // ngOnDestroy() {
  // }
}
