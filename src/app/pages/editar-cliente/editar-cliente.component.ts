import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Pais } from 'src/app/models/pais';
import { Estado } from 'src/app/models/estado';
import { Municipio } from 'src/app/models/municipio';
import { Endereco } from 'src/app/models/endereco';
import { Cliente } from 'src/app/models/cliente';
import { Sexo } from '../../models/enumerator/Sexo';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService) { }

      id: number;
      nome: string;
      sobrenome: string;
      cpf: string
      sexo: string;
      dataNascimento: Date;
      nomePais: string;
      siglaPais: string;
      nomeEstado: string;
      siglaEstado: string;
      nomeMunicipio: string;
      enderecoRua: string;
      enderecoBairro: string;
      enderecoNumero: number;
      enderecoLogradouro: string;
      enderecoCep: string;
      enderecoComplemento: string;

  editarClienteForm: FormGroup;

  public SexoEnum = Sexo;
  
  sexos = ['MASCULINO', 'FEMININO'];;

  ngOnInit() {
    var clientId = window.localStorage.getItem("clienteId");

    this.editarClienteForm = this.formBuilder.group({
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
      this.editarClienteForm.setValue({
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

  salvar() {

    var pais = new Pais();
    pais.nome = this.nomePais;
    pais.sigla = this.siglaPais;

    var estado = new Estado();
    estado.nome = this.nomeEstado;
    estado.sigla = this.siglaEstado;
    estado.pais = pais;

    var municipio = new Municipio();
    municipio.nome = this.nomeMunicipio;
    municipio.estado = estado;

    var endereco = new Endereco();
    endereco.rua = this.enderecoRua;
    endereco.bairro = this.enderecoBairro;
    endereco.numero = this.enderecoNumero;
    endereco.logradouro = this.enderecoLogradouro;
    endereco.cep = this.enderecoCep;
    endereco.complemento = this.enderecoComplemento;
    endereco.municipio = municipio;

    var cliente = new Cliente();

    cliente.cpf = this.cpf;

    if (this.sexo === "Masculino") {
      cliente.sexo = this.SexoEnum.MASCULINO;
    }
    else if (this.sexo === "Feminino") {
      cliente.sexo = this.SexoEnum.FEMININO;
    }

    cliente.sexo = this.sexo;
    cliente.dataNascimento = this.dataNascimento;
    cliente.nome = this.nome;
    cliente.sobrenome = this.sobrenome;
    cliente.endereco = endereco;

    this.clienteService.update(cliente)
    .subscribe(
      data => {
        if (data.status === 200) {
           alert("Cliente atualizado com sucesso!");
           this.router.navigate(['clientes']);
        } else {
          alert(data.message);
        }
      },
      error => {
        alert(error);
      });
  }

  cancelar() {
    this.router.navigate(['clientes'])
  }

}
