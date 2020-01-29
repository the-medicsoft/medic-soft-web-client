import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private authenticationService: AuthenticationService) {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    const email = token ? token.user.tokendata.email : undefined;
    this.currentUserSubject = new BehaviorSubject<any>(email);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  login(body) {
    return this.authenticationService
      .login(body)
      .pipe(map(data => {
        if (data['success'] === true && data['token'] && data['token'] !== '') {
          const decoded = jwtDecode(data['token']);

          const currentUser = {
            token: data['token'],
            user: decoded
          };

          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser.user['tokendata']['email']);
          return true;
        } else {
          return false;
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
