import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "http://localhost:5000/logins"

  constructor(private http: HttpClient) { }

  save(login: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, login);
  }

}
