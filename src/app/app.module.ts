import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatRadioModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsService } from './services/doctors.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    DialogComponent,
    SignupComponent,
    ForgotPasswordComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    HttpClientModule
  ],
  entryComponents: [DialogComponent],
  providers: [DialogService, DoctorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
