import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../models/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  apiUrl = "http://momentsmaker-env.eba-bxhiwmf3.sa-east-1.elasticbeanstalk.com/estado"

  constructor(private http: HttpClient) { }

  async save(estado: Estado) {
    return await this.http.post<Estado>(this.apiUrl, estado).toPromise();
  }

}
