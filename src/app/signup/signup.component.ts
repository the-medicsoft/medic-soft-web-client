import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import data from '../../data/India-state-data.json';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) { }

  showSetPasswordFrom: boolean = false;
  signUpForm: FormGroup;
  states;
  cities;

  get f() { return this.signUpForm.controls }
  get faddress() { return this.signUpForm.controls['address']['controls']; }
  get fcontacts() { return this.signUpForm.controls['contacts']['controls']; }

  getStates(country: string) {
    if (country === "India") {
      this.states = data;
    } else {
      this.states = {};
    }
  }

  getCities(state: string) {
    this.cities = data[state];
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    } else {
      this.signupService.signUp(this.signUpForm.value)
        .subscribe(data => {
          console.log('Welcome', data);
          if (data) {
            this.router.navigate(['/login', {email: this.signUpForm.value.contacts.email}]); 
          }
        });
    }
  }

  setPassword(set: boolean) {
    this.signUpForm.controls["password"].setErrors(null);
    this.signUpForm.controls["confirmPassword"].setErrors(null);

    if (this.fcontacts['email'].errors || this.fcontacts['phone'].errors || this.f.firstName.errors || this.f.lastName.errors ||
      this.f.dob.errors || this.f.gender.errors || this.faddress['line1'].errors || this.faddress['line2'].errors ||
      this.faddress['country'].errors || this.faddress['state'].errors || this.faddress['zipCode'].errors) {
      this.signUpForm.controls.markAsTouched;
      return;
    }

    this.showSetPasswordFrom = set;
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      contacts: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['']
      }),
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['M', [Validators.required]],
      address: this.formBuilder.group({
        line1: ['', [Validators.required]],
        line2: ['', []],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
        country: ['', [Validators.required]]
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
}
