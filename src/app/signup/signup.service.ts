import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/edge';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {
}

saveUsers(){

  return this.http.get('http://localhost:4000/api/v1/signup').subscribe(data=>{
    console.log('Welcome', data)
  })

}


}
