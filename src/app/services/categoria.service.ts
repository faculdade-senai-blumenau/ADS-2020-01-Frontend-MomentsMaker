import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl: string = 'http://momentsmaker-env.eba-bxhiwmf3.sa-east-1.elasticbeanstalk.com/categorias/'

  constructor(private http: HttpClient) { }

  async save(categoria: Categoria) {
    return await this.http.post<Categoria>(this.apiUrl, categoria).toPromise();
  }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl); 
  }

  deletar(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(this.apiUrl + id);
  }

  getById(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(this.apiUrl + id);
  }

  update(categoria: Categoria): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.apiUrl, categoria);
  }

}
