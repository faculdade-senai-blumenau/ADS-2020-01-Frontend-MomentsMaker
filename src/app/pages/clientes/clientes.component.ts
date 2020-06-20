import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  clientes: Cliente[];
  clienteFullInfoForm: FormGroup;

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(data => {this.clientes = data});
  }

  voltar() {
    this.router.navigate(["dashboard"]);
  }

  ver(cliente: Cliente) {
    window.localStorage.removeItem("clienteId");
    window.localStorage.setItem("clienteId", cliente.id.toString());
    this.router.navigate(['ver-cliente']);
  }

  editar(cliente: Cliente) {
    window.localStorage.removeItem("clienteId");
    window.localStorage.setItem("clienteId", cliente.id.toString());
    this.router.navigate(['editar-cliente'])
  }

  deletar(cliente: Cliente) {
    if(confirm("Tem certeza que deseja deletar o cliente?")){
      this.clienteService.deletar(cliente.id)
      .subscribe( data => {
        this.clientes = this.clientes.filter(u => u !== cliente);
      })
    }
  }

}
