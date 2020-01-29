import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private authenticationService: AuthenticationService) { }

  signUp(body) {
    console.log(body);
    return this.authenticationService.signUp(body)
      .pipe(map(response => {
        if (response['success']) {

          // Commenting this part as this causes an error while decoding the token.
          // const decoded = jwtDecode(response['token']);

          // const currentUser = {
          //   token: response['token'],
          //   user: decoded
          // };

          // localStorage.setItem('currentUser', JSON.stringify(currentUser));
          // this.currentUserSubject.next(currentUser.user['tokendata']['email']);
          return true;
        } else {
          return false;
        }
      }));
  }
}
