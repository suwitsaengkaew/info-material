import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  SigninGroup: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: String;

  ngOnInit() {
    this.OnformInit();
    this.returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.SigninGroup.controls; }

  Onsigin() {
    this.submitted = true;

    if (this.SigninGroup.invalid) {
      return;
    }

    this.loading = true;
    const username = this.SigninGroup.value['username'];
    const password = this.SigninGroup.value['password'];

    setTimeout(() => {
      this.authenticationService.login(username, password)
        .map(
          data => {
            this.router.navigate([this.returnUrl]);
            console.log(data);
          },
          error => {
            console.log(error);
            this.loading = false;
          }
        );
    }, 3000);

  }

  private OnformInit() {
    const username = '';
    const password = '';
    this.SigninGroup = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required)
    });
  }
}
