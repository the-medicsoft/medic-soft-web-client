import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private authenticationService: AuthenticationService) { }

  signUp() {
    return this.authenticationService.signUp('')
      .subscribe(data => {
        console.log('Welcome', data);
      });
  }
}
