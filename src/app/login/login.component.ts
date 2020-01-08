import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

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
    this.activatedRoute.url.subscribe(url => {
      if (url[0].path === 'login') {
        this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
        });
      } else {
        this.logout();
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }
}
