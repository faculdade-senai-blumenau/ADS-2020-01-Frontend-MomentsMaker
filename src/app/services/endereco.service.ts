import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../models/endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  apiUrl = "http://localhost:5000/enderecos"

  constructor(private http: HttpClient) { }

  async save(endereco: Endereco) {
    return await this.http.post<Endereco>(this.apiUrl, endereco).toPromise();
  }


}
