import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  constructor(private fornecedorService: FornecedorService, private router: Router, private categoriaService: CategoriaService) { }

  cnpj_cpf: string;
  nome_fantasia: string;
  categorias: Categoria[];
  categoria: Categoria;
  tipoProfissional: string;

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(data => {
      this.categorias = data;
    })
  }

  async save() {
    var fornecedor = new Fornecedor();
    fornecedor.cnpj_cpf = this.cnpj_cpf;
    fornecedor.nome_fantasia = this.nome_fantasia;
    fornecedor.tipoProfissional = this.tipoProfissional;
    
    var categoria = new Categoria();
    categoria = this.categoria;
    
    fornecedor.categorias = [categoria];

    fornecedor = await this.fornecedorService.save(fornecedor);

    if (fornecedor.id !== undefined) {
      console.log("Fornecedor salvo com sucesso.");
      console.log(fornecedor);
      this.router.navigate(["/dashboard/fornecedores"])
    } else {
      console.log("Erro ao salvar o fornecedor.");
      console.log(fornecedor);
    }
  }

  voltar() {
    this.router.navigate(["dashboard"]);
  }

}
