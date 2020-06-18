import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl: string = 'http://localhost:5000/clientes'

  constructor(private http: HttpClient) { }

  async save(cliente: Cliente) {
    return await this.http.post<Cliente>(this.apiUrl, cliente).toPromise();
  }

}
