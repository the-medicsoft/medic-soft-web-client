import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctors/Doctor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctorsURL = 'http://localhost:4000/api/v1/doctors?contacts.email=Jamaal64@yahoo.com';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorsURL);
  }
}
