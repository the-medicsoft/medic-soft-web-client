import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.scss']
})
export class AfterLoginComponent implements OnInit {
title='';

  constructor() { }


  ngOnInit() {
const token = localStorage.getItem('token');
const tokenPayload = jwtDecode(token);
//console.log(tokenPayload.tokendata.email);
this.title=tokenPayload.tokendata.email;

  }

}
