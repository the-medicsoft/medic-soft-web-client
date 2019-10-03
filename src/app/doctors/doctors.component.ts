import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from './Doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctorsURL = 'http://localhost:4000/api/v1/doctors?contacts.email=Jamaal64@yahoo.com';
  doctors: Doctor;

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe(data => {
      console.log(data[0]);
    });
  }
}
