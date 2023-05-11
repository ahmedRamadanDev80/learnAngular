import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  isUserLogged:boolean = false;
  constructor(private authService:UserAuthService) { }

  ngOnInit() {
    this.isUserLogged = this.authService.isUserLogged;
  }

  login(){
    this.authService.login("username","password");
    this.isUserLogged = this.authService.isUserLogged;
  }
    
  logout(){
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
  }
}
