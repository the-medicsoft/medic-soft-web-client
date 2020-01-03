import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url;
  private httpHeaders;

  constructor(private http: HttpClient) {
    this.url = 'https://authmedicsoft.herokuapp.com/api/v1/login';

    this.httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
  }

  login(body) {
    return this.http.post(this.url, body, { headers: this.httpHeaders });
  }

  signUp(body) {
    return this.http.post(this.url, body, { headers: this.httpHeaders });
  }
}
