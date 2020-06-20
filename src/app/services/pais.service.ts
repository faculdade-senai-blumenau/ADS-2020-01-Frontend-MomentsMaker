import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../models/pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiUrl = "http://localhost:8080/pais"

  constructor(private http: HttpClient) { }

  async save(pais: Pais) {
    return await this.http.post<Pais>(this.apiUrl, pais).toPromise();
  }

}
