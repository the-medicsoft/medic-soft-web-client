import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor, DoctorAdapter } from '../doctors/Doctor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private doctorsURL = 'http://localhost:4000/api/v1/doctors';

  constructor(private http: HttpClient, private doctorAdapter: DoctorAdapter) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorsURL).pipe(
      map((data: any[]) => data['data'].map(doctor => this.doctorAdapter.adapt(doctor)))
    );
  }

  getDoctorsByLocation(position): Observable<Doctor[]> {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `${this.doctorsURL}?location=${lng},${lat}`;

    return this.http
      .get<Doctor[]>(url)
      .pipe(
        map((data: any[]) => data['data'].map(doctor => this.doctorAdapter.adapt(doctor)))
      );
  }
}
