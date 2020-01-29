import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl;
  private httpHeaders;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://authmedicsoft.herokuapp.com/api';

    this.httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
  }

  login(body) {
    const loginUrl = `${this.baseUrl}/v1/login`;
    return this.http.post(loginUrl, body, { headers: this.httpHeaders });
  }

  signUp(body) {
    const signUpUrl = `${this.baseUrl}/v1/signup`;
    return this.http.post(signUpUrl, body, { headers: this.httpHeaders });
  }
}
