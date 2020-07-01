import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-finaliza-evento',
  templateUrl: './finaliza-evento.component.html',
  styleUrls: ['./finaliza-evento.component.scss']
})
export class FinalizaEventoComponent implements OnInit {

  constructor(private fornecedorService:FornecedorService,
              private categoriaService:CategoriaService,
              private router: Router) { }

    fornecedor :Fornecedor
    categoriaObj:Categoria

  ngOnInit(): void {
    var categoriaid = window.localStorage.getItem("categoriaID");
    var fornecedorid = window.localStorage.getItem("fornecedorID");
    window.localStorage.removeItem("categoriaID");
    window.localStorage.removeItem("fornecedorID");
    this.categoriaService.getById(categoriaid).subscribe(data => { this.categoriaObj = data })
    this.fornecedorService.getById(fornecedorid).subscribe(data => { this.fornecedor = data })
  }
 
  voltar() {
    this.router.navigate([""]);
  }
}
