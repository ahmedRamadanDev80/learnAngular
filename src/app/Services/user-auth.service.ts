import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject:BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject =new BehaviorSubject<boolean>(this.isUserLogged);
   }
  login(username:string ,password:string){
    let token ='wabba labba dubdub';
    localStorage.setItem("token",token);
    this.isLoggedSubject.next(true);
  }
  logout(){
    localStorage.removeItem("token");
    this.isLoggedSubject.next(false);
  }
  get isUserLogged():boolean{
    return localStorage.getItem("token") ? true : false;
  }
  getLoggedStatus():Observable<boolean>{
    return this.isLoggedSubject.asObservable();
  }
}
