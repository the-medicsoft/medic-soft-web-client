import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData = [];

  public userEmail;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  loginForm: FormGroup;

  get f() { return this.loginForm.controls }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loginService
        .login(this.loginForm.value)
        .subscribe(result => {
          if (result) {
            this.router.navigateByUrl('/');
          }
        });
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
