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
  ngOnInit(): void {
    var categoria = window.localStorage.getItem("categoriaID");
    console.log(categoria);
    window.localStorage.removeItem("categoriaID");
    this.fornecedroSercice.getAll().subscribe(data => { this.fornecedores = data })

  }
  filtrar()
  {
    console.log(this.dataInicial);
    console.log(this.dataFinal);
  }

}
