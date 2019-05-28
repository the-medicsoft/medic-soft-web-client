import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './services/dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  entryComponents: [DialogComponent],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
