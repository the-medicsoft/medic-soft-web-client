import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { SignupComponent } from './signup/signup.component'
import { FacebookLoginComponent } from './facebook-login/facebook-login.component'
import { GoogleLoginComponent } from './google-login/google-login.component'
import { AfterLoginComponent } from './after-login/after-login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'facebookLogin', component: FacebookLoginComponent},
  {path: 'googleLogin', component: GoogleLoginComponent},
  {path: 'afterlogin', component: AfterLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
