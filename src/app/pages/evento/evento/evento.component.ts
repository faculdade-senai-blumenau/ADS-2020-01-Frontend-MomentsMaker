import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { EventoService } from 'src/app/services/evento.service';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  constructor(private fornecedroService:FornecedorService,
     private fornecedorService: FornecedorService,
     private EventoService:EventoService,
     private router: Router) {
  }
  
  fornecedores: Fornecedor[]
  evento: Evento
  dataInicio:Date
  dataFim:Date
  idCategoria:string

  ngOnInit(): void {
    var categoria = window.localStorage.getItem("categoriaID");
    this.idCategoria = categoria.toString();
    console.log(categoria);
    window.localStorage.removeItem("categoriaID");
    this.fornecedroService.getAll().subscribe(data => { this.fornecedores = data })

  }
  voltar() {
    this.router.navigate(["dashboard/categoria"]);
  }
  filtrar()
  {   

    console.log(this.dataInicio, this.dataFim);
    if (this.dataInicio === undefined|| this.dataFim === undefined) {
      return alert("Data inválida. Selecione uma data válida!")
    }

    this.fornecedorService.getPorDisponibilidade(this.dataInicio, this.dataFim).subscribe(data => {
      console.log(this.dataInicio, this.dataFim);
      this.fornecedores = data;
      console.log(this.dataInicio, this.dataFim);
    });
    
    console.log(this.dataInicio, this.dataFim);
    
  }
  gerarLink(idFornecedor:string)
  {
    window.localStorage.removeItem("categoriaID");
    window.localStorage.setItem("categoriaID", this.idCategoria);
    window.localStorage.removeItem("fornecedorID");
    window.localStorage.setItem("fornecedorID", idFornecedor);
    
    
    this.router.navigate(["dashboard/finalizarEvento"]);
  }

}
