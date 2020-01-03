import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogService } from '../services/dialog.service';
import { DialogData } from '../shared/dialog-data'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  currentUser: any;
  currentUserSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private dialogService: DialogService, private loginService: LoginService) {}

  openDialog(num: any) {
    const dialogData: DialogData = {
      title: 'Test Dialog',
      message: `You clicked on Item ${num}`,
      showOKBtn: true,
      showCancelBtn: true
    }
    const dialogRef = this.dialogService.openDialog(dialogData, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User clicked OK');
      } else {
        console.log('User clicked Cancel');
      }
    });
  }

  ngOnInit() {
    this.currentUserSubscription = this.loginService.currentUser.subscribe(email => {
      if (email) {
        this.isLoggedIn = true;
        this.currentUser = email;
      } else {
        this.isLoggedIn = false;
        this.currentUser = 'Login';
      }
    });
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }
}
