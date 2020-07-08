import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/models/evento';
import { Cliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-perfil-clientes',
  templateUrl: './perfil-clientes.component.html',
  styleUrls: ['./perfil-clientes.component.scss']
})
export class PerfilClientesComponent implements OnInit {

  eventos:Evento[];
  cliente:Cliente;
 
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
  enderecoBairro: string;
  enderecoNumero: number;
  enderecoLogradouro: string;
  enderecoCep: string;
  enderecoComplemento: string;
  dadospessoais:string;
  eventoativo:string;
  eventoinativo:string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    private fornecedorService: FornecedorService,
    private categoriaService:CategoriaService,
    private eventoService:EventoService) { }

  ngOnInit(): void {
    this.eventoService.getAll().subscribe(data => {  this.eventos = data  });
    
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
      enderecoBairro: [''],
      enderecoNumero: [''],
      enderecoLogradouro: [''],
      enderecoCep: [''],
      enderecoComplemento: ['']
    });
    
    this.clienteService.getById('24').subscribe(data => {
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
        'enderecoBairro': data.endereco.bairro,
        'enderecoNumero': data.endereco.numero,
        'enderecoLogradouro': data.endereco.logradouro,
        'enderecoCep': data.endereco.cep,
        'enderecoComplemento': data.endereco.complemento
      })
    });
    
    console.log( this.eventos);
   
  }
  
}
