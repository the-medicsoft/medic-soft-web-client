import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {DialogService} from '../services/dialog.service';
import {DialogData} from '../shared/dialog-data'

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  showLogin: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  openDialog(num: any)
  {
    const dialogData: DialogData = {
      title: 'Test Dialog',
      message: `You clicked on Item ${num}`,
      showOKBtn: true,
      showCancelBtn: true
    }
    const dialogRef = this.dialogService.openDialog(dialogData, {disableClose: true});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User clicked OK');
      } else {
        console.log('User clicked Cancel');
      }
    });
  }

  constructor(private breakpointObserver: BreakpointObserver, private dialogService: DialogService) {}

}
