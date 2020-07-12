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
      paisId: number;
      nomePais: string;
      siglaPais: string;
      estadoId: number;
      nomeEstado: string;
      siglaEstado: string;
      municipioId: number;
      nomeMunicipio: string;
      enderecoId: number;
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
      paisId: [''],
      nomePais: [''],
      siglaPais: [''],
      estadoId: [''],
      nomeEstado: [''],
      siglaEstado: [''],
      municipioId: [''],
      nomeMunicipio: [''],
      enderecoId: [''],
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
        'paisId': data.endereco.municipio.estado.pais.id,
        'nomePais': data.endereco.municipio.estado.pais.nome,
        'siglaPais': data.endereco.municipio.estado.pais.sigla,
        'estadoId': data.endereco.municipio.estado.id,
        'nomeEstado': data.endereco.municipio.estado.nome,
        'siglaEstado': data.endereco.municipio.estado.sigla,
        'municipioId': data.endereco.municipio.id,
        'nomeMunicipio': data.endereco.municipio.nome,
        'enderecoId': data.endereco.id,
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
    pais.id = this.editarClienteForm.get('paisId').value;
    pais.nome = this.editarClienteForm.get('nomePais').value;
    pais.sigla = this.editarClienteForm.get('siglaPais').value;

    var estado = new Estado();
    estado.id = this.editarClienteForm.get('estadoId').value;
    estado.nome = this.editarClienteForm.get('nomeEstado').value;
    estado.sigla = this.editarClienteForm.get('siglaEstado').value;
    estado.pais = pais;

    var municipio = new Municipio();
    municipio.id = this.editarClienteForm.get('municipioId').value;
    municipio.nome = this.editarClienteForm.get('nomeMunicipio').value;
    municipio.estado = estado;

    var endereco = new Endereco();
    endereco.id = this.editarClienteForm.get('enderecoId').value;
    endereco.bairro = this.editarClienteForm.get('enderecoBairro').value;
    endereco.numero = this.editarClienteForm.get('enderecoNumero').value;
    endereco.logradouro = this.editarClienteForm.get('enderecoLogradouro').value;
    endereco.cep = this.editarClienteForm.get('enderecoCep').value;
    endereco.complemento = this.editarClienteForm.get('enderecoComplemento').value;
    endereco.municipio = municipio;

    var cliente = new Cliente();

    cliente.id = this.editarClienteForm.get('id').value;
    cliente.cpf = this.editarClienteForm.get('cpf').value;
    cliente.sexo = this.editarClienteForm.get('sexo').value;
    cliente.dataNascimento = this.editarClienteForm.get('dataNascimento').value;
    cliente.nome = this.editarClienteForm.get('nome').value;
    cliente.sobrenome = this.editarClienteForm.get('sobrenome').value;
    cliente.endereco = endereco;

    this.clienteService.update(cliente)
    .subscribe(
      data => {
        if (data.status === 200) {
           alert("Cliente atualizado com sucesso!");
           this.router.navigate(['/dashboard/default']);
        } else {
          alert(data.message);
        }
      },
      error => {
        alert(error);
      });
  }

  cancelar() {
    this.router.navigate(['/dashboard/clientes'])
  }

}
