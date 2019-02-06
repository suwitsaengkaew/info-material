import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, merge, mergeMap } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserData } from '../_data/user.data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private user = UserData;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.user.filter(authenuser => {
        if (authenuser.username === username && authenuser.password === password) {
          localStorage.setItem('currentUser', JSON.stringify(authenuser));
          this.currentUserSubject.next(authenuser);
          console.log(authenuser);
          return authenuser;
        }
      });

    // for (let i = 0; i < this.user.length; i++) {
    //   if (username === this.user[i].username && password === this.user[i].password) {
    //     localStorage.setItem('currentUser', JSON.stringify(this.user[i]));
    //     this.currentUserSubject.next(this.user[i]);
    //     console.log(this.user[i]);
    //     return this.user[i];
    //   }
    // }

    // return null;
    // return this.user.map(xuser => {
    //   if (username === xuser.username && password === xuser.password) {
    //     localStorage.setItem('currentUser', JSON.stringify(xuser));
    //     this.currentUserSubject.next(xuser);
    //     console.log(xuser);
    //   }
    //   return xuser;
    // });
    // return this.http.post<any>(`/users/authenticase`, { username, password })
    // .pipe(map(user => {

    // }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
