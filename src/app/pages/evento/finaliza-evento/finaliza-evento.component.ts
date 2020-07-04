import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorEvento } from 'src/app/models/fornecedor-evento';
import { Categoria } from 'src/app/models/categoria';
import { Evento } from 'src/app/models/evento';
import { formatDate } from '@angular/common';
import { ClienteService } from 'src/app/services/cliente.service';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-finaliza-evento',
  templateUrl: './finaliza-evento.component.html',
  styleUrls: ['./finaliza-evento.component.scss']
})
export class FinalizaEventoComponent implements OnInit {

  constructor(private fornecedorService: FornecedorService,
    private categoriaService: CategoriaService,
    private clienteService: ClienteService,
    private eventoService: EventoService,
    private router: Router) { }

  fornecedor: Fornecedor
  categoriaObj: Categoria
  dataInicial: Date
  dataFinal: Date
  horaInicio: Date
  horaFim: Date
  evento: Evento
  fornecedorEvento: FornecedorEvento

  ngOnInit(): void {
    var categoriaid = window.localStorage.getItem("categoriaID");
    var fornecedorid = window.localStorage.getItem("fornecedorID");
    window.localStorage.removeItem("categoriaID");
    window.localStorage.removeItem("fornecedorID");

    this.evento = new Evento()
    
    this.categoriaService.getById(categoriaid).subscribe(data => { 
      this.categoriaObj = data; 
    })
    
    this.fornecedorService.getById(fornecedorid).subscribe(data => { this.fornecedor = data })
    this.evento.categoria = this.categoriaObj
    this.clienteService.getById('24').subscribe(data => { this.evento.cliente = data })
    this.evento.fornecedor.push(this.fornecedor)
  }

  voltar() {
    this.router.navigate(["dashboard/evento"]);
  }
  salvar() {
    this.evento.criacao = formatDate(new Date(), 'yyyy-MM-dd:HH:mm', 'en');

   // this.evento.horaFim = formatDate(this.horaFim, 'HH:mm:ss', 'en');
   //this.evento.horaInicio = formatDate(this.horaInicio, 'HH:mm:ss', 'en');

   this.dataInicial + ":" + this.horaInicio



   this.dataFinal.setDate(this.dataFinal.getDate()); 
    this.evento.dataFim = this.dataFinal;
    this.dataInicial.setHours( this.horaInicio.getHours());
    this.evento.dataInicio = this.dataInicial
    this.eventoService.save(this.evento);
    console.log("SALVOU");
    console.log(this.evento);
    this.router.navigate(["dashboard"])
  }
}
