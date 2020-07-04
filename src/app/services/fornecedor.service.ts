import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../models/fornecedor';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  apiUrl: string = 'http://momentsmaker-env.eba-bxhiwmf3.sa-east-1.elasticbeanstalk.com/fornecedores/'

  constructor(private http: HttpClient) { }

  async save(fornecedor: Fornecedor) {
    return await this.http.post<Fornecedor>(this.apiUrl, fornecedor).toPromise();
  }

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.apiUrl); 
  }

  deletar(id: number): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(this.apiUrl + id);
  }

  getById(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(this.apiUrl + id);
  }

  update(fornecedor: Fornecedor): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.apiUrl, fornecedor);
  }

}
