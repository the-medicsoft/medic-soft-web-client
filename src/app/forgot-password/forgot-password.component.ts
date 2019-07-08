import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }
  forgotPasswordForm : FormGroup;

  get f() {return this.forgotPasswordForm.controls}

  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotPasswordForm.value))
  }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

}
