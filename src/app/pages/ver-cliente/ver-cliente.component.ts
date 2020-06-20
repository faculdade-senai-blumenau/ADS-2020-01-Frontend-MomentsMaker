import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.scss']
})
export class VerClienteComponent implements OnInit {

  verClienteForm: FormGroup;

  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  sexo: string;
  dataNascimento: Date;
  nomePais: string;
  siglaPais: string;
  nomeEstado: string;
  siglaEstado: string;
  nomeMunicipio: string
  enderecoRua: string;
  enderecoBairro: string;
  enderecoNumero: number;
  enderecoLogradouro: string;
  enderecoCep: string;
  enderecoComplemento: string;
  
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private clienteService: ClienteService) { }

  ngOnInit() {
    var clientId = window.localStorage.getItem("clienteId");    

    this.verClienteForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      sobrenome: [''],
      cpf: [''],
      sexo: [''],
      dataNascimento: [''],
      nomePais: [''],
      siglaPais: [''],
      nomeEstado: [''],
      siglaEstado: [''],
      nomeMunicipio: [''],
      enderecoRua: [''],
      enderecoBairro: [''],
      enderecoNumero: [''],
      enderecoLogradouro: [''],
      enderecoCep: [''],
      enderecoComplemento: ['']
    });

    this.clienteService.getById(clientId).subscribe(data => {
      this.verClienteForm.setValue({
        'id': data.id,
        'nome': data.nome,
        'sobrenome': data.sobrenome,
        'cpf': data.cpf,
        'sexo': data.sexo,
        'dataNascimento': data.dataNascimento,
        'nomePais': data.endereco.municipio.estado.pais.nome,
        'siglaPais': data.endereco.municipio.estado.pais.sigla,
        'nomeEstado': data.endereco.municipio.estado.nome,
        'siglaEstado': data.endereco.municipio.estado.sigla,
        'nomeMunicipio': data.endereco.municipio.nome,
        'enderecoRua': data.endereco.rua,
        'enderecoBairro': data.endereco.bairro,
        'enderecoNumero': data.endereco.numero,
        'enderecoLogradouro': data.endereco.logradouro,
        'enderecoCep': data.endereco.cep,
        'enderecoComplemento': data.endereco.complemento
      })
    });

  }  

  voltar() {
    this.router.navigate(["clientes"]);
  }
  
}
