import { Component, OnInit } from '@angular/core';
import { UsernameModel } from '../quiz-master/quiz.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { first } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-quizauthen',
  templateUrl: './quizauthen.component.html',
  styleUrls: ['./quizauthen.component.css']
})
export class QuizauthenComponent implements OnInit {

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
  loading =  false;
  submitted = false;
  returnUrl: String;

  username: UsernameModel[] = [
    {username: 'suwit', password: 'password', section: 'IT'},
    {username: 'kessarin', password: 'password' , section: 'IT'},
    {username: 'nuttida', password: 'password' , section: 'QA'},
  ];

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
    // for (let i = 0; i < this.username.length; i++) {
    //   if ((username === this.username[i].username) && (password === this.username[i].password)) {
    //     this.router.navigate(['/quizmgnt', this.username[i].username, this.username[i].section]);
    //   }
    // }
    this.authenticationService.login(username, password)
    .map(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
      }
    );
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
