import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url;
  private httpHeaders;

  constructor(private http: HttpClient) {
    this.url = 'https://authmedicsoft.herokuapp.com/api/v1/login';

    this.httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
  }

  login(body) {
    return this.http.post(this.url, body, { headers: this.httpHeaders })
      .pipe(map(data => {
        if (data && data['token'] && data['token'] !== '') {
          const currentUser = {};

          currentUser['token'] = data['token'];

          currentUser['user'] = jwtDecode(currentUser['token']);

          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
          return false;
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
