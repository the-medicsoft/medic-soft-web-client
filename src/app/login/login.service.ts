import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/edge';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://authmedicsoft.herokuapp.com/api/v1/login';

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  options = {
    headers: this.httpHeaders
  };

user(body) {
    return this.http.post(this.url,body, this.options)}


  constructor(private http: HttpClient) {
}

}
