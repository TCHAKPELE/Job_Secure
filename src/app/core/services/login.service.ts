import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  pathrUrl: string = environment.apiUrl;
  user!: UserModel;

  constructor(private http: HttpClient) { }


    
  verifyUser(formValue: any){
    
    return this.http.post<any>(`${this.pathrUrl}/login`, formValue);
  }

  addUserAuth(user: UserModel){
    this.user= user;
    
  }
}
