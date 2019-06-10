import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.css']
})
export class NavbarBottomComponent implements OnInit {
  @Input() isDisplayNavbar;

  constructor() { }

  ngOnInit() {
  }

}
