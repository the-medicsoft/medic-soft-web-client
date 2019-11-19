import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service'
import { getClosureSafeProperty } from '@angular/core/src/util/property';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { getViewData } from '@angular/core/src/render3/state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData = [];

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }
  loginForm: FormGroup;

  get f() { return this.loginForm.controls }

  
  
 

  onSubmit() {
    if (this.loginForm.invalid) {

      return;
    }
    else {
      this.loginService.user(this.loginForm.value).subscribe((data) => {
        if(data.hasOwnProperty['token']){
          if(data['success']=200 && data['token']!=""){
        localStorage.setItem('token', JSON.stringify(data));
      }

    }
      else{ return; }
      });

      if (localStorage.getItem("token")) 
      {
        const token = localStorage.getItem('token');
        const tokenPayload = jwtDecode(token);
        this.router.navigateByUrl('/afterlogin');
       
      }

    }
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
