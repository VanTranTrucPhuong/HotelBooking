import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected utility: UtilityService) {
    this.utility.setDisplayNavbar(false);
    this.utility.setDisplayHeader(false);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }


}
