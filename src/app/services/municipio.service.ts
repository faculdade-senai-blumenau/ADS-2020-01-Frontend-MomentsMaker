import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipio } from '../models/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  apiUrl = "http://localhost:5000/municipios"

  constructor(private http: HttpClient) { }

  async save(municipio: Municipio) {
    return await this.http.post<Municipio>(this.apiUrl, municipio).toPromise();
  }

}
