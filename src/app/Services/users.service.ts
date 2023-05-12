import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Models/IUser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(`${environment.ApiUrl}/User/GetUsers/0/false`);
  }

  getActiveUsers(status:boolean):Observable<IUser[]>{
    return this.http.get<IUser[]>(`${environment.ApiUrl}/User/GetUsers/0/${status}`);
  }
  
  getSingleUser(id:number):Observable<IUser>{
    return this.http.get<IUser>(`${environment.ApiUrl}/User/GetUsers/${id}/false`);
  } 
  
}
