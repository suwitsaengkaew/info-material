import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';

import { User } from '../../_models/user';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  currentUserValue: User;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  callservice() {
    this.currentUserValue = this.authenticationService.currentUserValue;
    console.log(this.currentUserValue);
  }
}
