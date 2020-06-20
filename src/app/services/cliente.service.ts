import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  apiUrl: string = 'http://localhost:8080/cliente/'

  constructor(private http: HttpClient) { }

  async save(cliente: Cliente) {
    return await this.http.post<Cliente>(this.apiUrl, cliente).toPromise();
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl); 
  }

  deletar(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(this.apiUrl + id);
  }

  getById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiUrl + id);
  }

  update(cliente: Cliente): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.apiUrl + cliente.id, cliente);
  }

}
