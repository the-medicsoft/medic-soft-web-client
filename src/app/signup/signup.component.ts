import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator'
import { HttpClient } from '@angular/common/http'
import data from '../../data/India-state-data.json'
import { SignupService } from './signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit { 
  constructor(private formBuilder : FormBuilder, private httpService: HttpClient, private signupService: SignupService) { }

  showSetPasswordFrom: boolean = false;
  signUpForm : FormGroup;
  states;
  cities

  get f() {return this.signUpForm.controls}
  
  getStates(country:string){
    if(country ==="India")
    {
      this.states = data;
    }
    else
    {
      this.states = {};
    }
  }

  getCities(state: string)
  {    
    console.log(state)
    this.cities = data[state];
  }

  onSubmit() {

    var data=this.signupService.saveUsers();

    if (this.signUpForm.invalid) {
      console.log(this.signUpForm)
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpForm.value))
  }
  setPassword(set:boolean) {
    this.signUpForm.controls["password"].setErrors(null)
    this.signUpForm.controls["confirmPassword"].setErrors(null)
    if (this.f.email.errors || this.f.firstName.errors || this.f.lastName.errors ||
      this.f.dob.errors || this.f.gender.errors || this.f.line1.errors || this.f.line2.errors ||
      this.f.country.errors ||this.f.state.errors || this.f.zip.errors) {
      this.signUpForm.controls.markAsTouched;
      return;
    }
    this.showSetPasswordFrom = set;
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({      
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['M', [Validators.required]],
      phn: ['', [Validators.required]],
      line1: ['', [Validators.required]],
      line2: ['', []],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

}
