import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipio } from '../models/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  apiUrl = "http://momentsmaker-env.eba-bxhiwmf3.sa-east-1.elasticbeanstalk.com/municipio"

  constructor(private http: HttpClient) { }

  async save(municipio: Municipio) {
    return await this.http.post<Municipio>(this.apiUrl, municipio).toPromise();
  }

}
