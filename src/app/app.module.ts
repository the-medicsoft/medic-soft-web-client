import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDatepickerModule,MatNativeDateModule,MatSelectModule ,MatRadioModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule, MatMenuModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    DialogComponent,
    SignupComponent,
    ForgotPasswordComponent,
    FacebookLoginComponent,
    GoogleLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  entryComponents: [DialogComponent],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
