import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }
  
  categorias: Categoria[]

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(data => { this.categorias = data })
  }
  voltar() {
    this.router.navigate(["default"]);
  }
  gerarLink(idCategoria:string)
  {
    window.localStorage.removeItem("categoriaID");
    window.localStorage.setItem("categoriaID", idCategoria);
    this.router.navigate(["dashboard/evento"]);
  }
}
