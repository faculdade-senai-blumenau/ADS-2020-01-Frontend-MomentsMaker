import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from 'node_modules/@angular/forms';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Sexo } from '../../models/enumerator/Sexo';
import { Login } from 'src/app/models/login';
import { Endereco } from 'src/app/models/endereco';
import { Municipio } from 'src/app/models/municipio';
import { Estado } from 'src/app/models/estado';
import { Pais } from 'src/app/models/pais';
import { LoginService } from 'src/app/services/login.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { PaisService } from 'src/app/services/pais.service';
import { EstadoService } from 'src/app/services/estado.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

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

  sexos = ['MASCULINO', 'FEMININO'];
  submitted = false;
  falhou = false;
  private readonly cpfRegex = "/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/";
  public SexoEnum = Sexo;
  public clienteForm: FormGroup;

  constructor(private clienteService: ClienteService,
    private loginService: LoginService,
    private enderecoService: EnderecoService,
    private paisService: PaisService,
    private estadoService: EstadoService,
    private municipioService: MunicipioService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
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
    })
  }

  async save() {
    this.submitted = true;

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
    endereco.bairro = this.enderecoBairro;
    endereco.numero = this.enderecoNumero;
    endereco.logradouro = this.enderecoLogradouro;
    endereco.cep = this.enderecoCep;
    endereco.complemento = this.enderecoComplemento;
    endereco.municipio = municipio;

    const login = new Login();
    login.usuario = "email@email.com";
    login.senha = "password1!";
    login.ehFornecedor = true;

    var cliente = new Cliente();
    cliente.cpf = this.cpf;
    cliente.sexo = this.sexo;
    cliente.dataNascimento = this.dataNascimento;
    cliente.nome = this.nome;
    cliente.sobrenome = this.sobrenome;
    cliente.login = login;
    cliente.endereco = endereco;

    console.log(JSON.stringify(cliente));

    cliente = await this.clienteService.save(cliente);

    if (cliente.id != null) {
      this.id = cliente.id;
      console.log("Cliente salvo com sucesso.");
      console.log(cliente);
      this.falhou = false
    } else {
      this.falhou = true;
      console.log("Erro ao salvar o cliente.");
      console.log(cliente);
    }

    this.router.navigate(["dashboard"]);

  }

  voltar() {
    this.router.navigate(["dashboard"]);
  }

}
