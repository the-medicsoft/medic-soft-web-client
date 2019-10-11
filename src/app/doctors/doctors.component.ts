import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from './Doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  public doctors: Doctor[];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.getDoctorsByLocation();
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  getDoctorsByLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.doctorsService.getDoctorsByLocation(position).subscribe(doctors => this.doctors = doctors);
      },
      (error) => { });
  }

  bookAppointment(doctor) {
    const _doctor = new Doctor(undefined, undefined, undefined, doctor.department, undefined, doctor.firstName, undefined, undefined, undefined, undefined, doctor.lastName, undefined, undefined, undefined, undefined);
    console.log(_doctor);
  }
}