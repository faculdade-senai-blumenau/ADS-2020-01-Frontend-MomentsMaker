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

  constructor(private fornecedroSercice:FornecedorService,
     private EventoService:EventoService,
     private router: Router) {
  }
  
  fornecedores: Fornecedor[]
  evento: Evento
  dataInicial:Date
  dataFinal:Date
  idCategoria:string

  ngOnInit(): void {
    var categoria = window.localStorage.getItem("categoriaID");
    this.idCategoria = categoria.toString();
    console.log(categoria);
    window.localStorage.removeItem("categoriaID");
    this.fornecedroSercice.getAll().subscribe(data => { this.fornecedores = data })

  }
  voltar() {
    this.router.navigate([""]);
  }
  filtrar()
  {
    console.log(this.dataInicial);
    console.log(this.dataFinal);
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
