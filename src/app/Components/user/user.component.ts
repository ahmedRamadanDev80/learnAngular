import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/Models/IUser';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges,OnDestroy{

  activeStatus:boolean = true;
  usersList:IUser[] =[];
  subscriptions: Subscription[] = [];
  
  constructor(private usrService:UsersService
             ,private router:Router
             ,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.subscriptions.push(this.usrService.getAllUsers().subscribe(usrs =>{
      this.usersList = usrs;
    }))
  }

  ngOnChanges(): void {
    this.subscriptions.push(this.usrService.getActiveUsers(this.activeStatus).subscribe(usrs =>{
      this.usersList = usrs;
    }))
  }

  ngOnDestroy(): void {
     this.subscriptions.forEach((subscription) => subscription.unsubscribe());// this.usrService.getAllUsers().
  }

}
