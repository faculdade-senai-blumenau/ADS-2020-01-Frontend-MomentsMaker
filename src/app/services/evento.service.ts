import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
@Injectable({
  providedIn: 'root'
})
export class EventoService {

 
  apiUrl: string = 'http://momentsmaker-env.eba-bxhiwmf3.sa-east-1.elasticbeanstalk.com/evento/'

  constructor(private http: HttpClient) { }

  async save(evento: Evento) {
    return await this.http.post<Evento>(this.apiUrl, evento).toPromise();
  }

  getAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl); 
  }

  deletar(id: number): Observable<Evento> {
    return this.http.delete<Evento>(this.apiUrl + id);
  }

  async getById(id: string){
    return await this.http.get<Evento>(this.apiUrl + id).toPromise();
  }

  update(evento: Evento): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.apiUrl, evento);
  }

}
