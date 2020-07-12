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

  constructor(private fornecedorService:FornecedorService,
     private EventoService:EventoService,
     private router: Router) {
  }
  
  fornecedores: Fornecedor[]
  evento: Evento
  dataInicio:Date
  horaInicio: Date
  dataFim:Date
  horaFim: Date
  idCategoria:number

  ngOnInit(): void {
    var categoria = window.localStorage.getItem("categoriaID");
    this.idCategoria = +categoria;
    console.log(categoria);
    window.localStorage.removeItem("categoriaID");
    this.fornecedorService.getAll().subscribe(data => { this.fornecedores = data })

  }
  voltar() {
    this.router.navigate(["dashboard/categoria"]);
  }
  filtrar()
  {
    console.log(this.dataInicio, this.horaInicio, this.dataFim, this.horaFim);
    if (this.dataInicio === undefined|| this.dataFim === undefined || this.horaInicio === undefined || this.horaFim === undefined) {
      return alert("Data/hora inválida. Selecione data e hora válidas!")
    }

    this.fornecedorService.getPorDisponibilidade(this.dataInicio, this.horaInicio, this.dataFim, this.horaFim, this.idCategoria).subscribe(data => {
      this.fornecedores = data;
    });
  }
  gerarLink(idFornecedor:string)
  {
    window.localStorage.removeItem("categoriaID");
    window.localStorage.setItem("categoriaID", this.idCategoria.toString());
    window.localStorage.removeItem("fornecedorID");
    window.localStorage.setItem("fornecedorID", idFornecedor);
    
    
    this.router.navigate(["dashboard/finalizarEvento"]);
  }

}
