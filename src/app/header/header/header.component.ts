import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Isloginvalid = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
     ) { }

  ngOnInit() {
  }

  logout() {
    this.Isloginvalid = false;
    this.authenticationService.logout();
    this.router.navigate(['/quizauthen']);
  }

  login() {
    this.Isloginvalid = true;
  }
}
