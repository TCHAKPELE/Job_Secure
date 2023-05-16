import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  pathUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addInterimaire(formValue: any): Observable<any> {
    return this.http.post<any>(`${this.pathUrl}/interimaire`, formValue);
  }

  addEntreprise(formValue: any): Observable<any> {
    return this.http.post<any>(`${this.pathUrl}/entreprise`, formValue);
  }
}
