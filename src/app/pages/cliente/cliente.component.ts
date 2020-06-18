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

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  id: number;
  cpf: string;
  sexo: string;
  dataNascimento: Date;
  nome: string;
  sobrenome: string;
  mediaAvaliacao: number;
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
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      cpf: ['', [Validators.required]],
      sexo: ['', [Validators.required, Validators.pattern(this.cpfRegex)]],
      dataNascimento: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      mediaAvaliacao: ['']
    })
  }

  /*
    handleError(field: string, error: string) {
      const ctrl = this.clienteForm.get(field);
      console.log(ctrl.dirty && ctrl.hasError(error));
       
    }
  */

  async save() {
    this.submitted = true;

    const login = new Login();
    login.usuario = "email@email.com";
    login.senha = "password1!";
    login.ehFornecedor = true;

    this.loginService
      .save(login)
      .subscribe(data => {
        if (data.id != null) {
          login.id = data.id;
          console.log("Login salvo com sucesso.");
          console.log(data);
          this.falhou = true
        } else {
          this.falhou = false;
          console.log("Erro ao salvar o login.");
          console.log(data);
        }
      })

    var pais = new Pais();
    pais.nome = "nome país";
    pais.sigla = "BR";

    pais = await this.paisService.save(pais);

    if (pais.id != null) {
      pais.id = pais.id;
      console.log("País salvo com sucesso." + "id = " + pais.id);
      console.log(pais);
      this.falhou = true
    } else {
      this.falhou = false;
      console.log("Erro ao salvar o país.");
      console.log(pais);
    }

    var estado = new Estado();
    estado.nome = "nome estado";
    estado.sigla = "sigla estado";
    estado.pais = pais;

    estado = await this.estadoService.save(estado);

    if (estado.id != null) {
      estado.id = estado.id;
      console.log("Estado salvo com sucesso." + "id = " + estado.id + "estado país = " + estado.pais);
      console.log(estado);
      this.falhou = true
    } else {
      this.falhou = false;
      console.log("Erro ao salvar o estado.");
      console.log(estado);
    }


    var municipio = new Municipio();
    municipio.nome = "nome municipio";
    municipio.estado = estado;

    municipio = await this.municipioService.save(municipio);

    if (municipio.id != null) {
      municipio.id = municipio.id;
      console.log("Município salvo com sucesso.");
      console.log(municipio);
      this.falhou = true
    } else {
      this.falhou = false;
      console.log("Erro ao salvar o município.");
      console.log(municipio);
    }

    var endereco = new Endereco();
    endereco.rua = "rua";
    endereco.bairro = "bairro";
    endereco.numero = 30;
    endereco.logradouro = "logradouro";
    endereco.cep = "cep";
    endereco.complemento = "complemento";
    endereco.municipio = municipio;

    endereco = await this.enderecoService.save(endereco);

    if (endereco.id != null) {
      endereco.id = endereco.id;
      console.log("Endereço salvo com sucesso.");
      console.log(endereco);
      this.falhou = true
    } else {
      this.falhou = false;
      console.log("Erro ao salvar o endereço.");
      console.log(endereco);
    }

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
    cliente.mediaAvaliacao = this.mediaAvaliacao;
    cliente.login = login;
    cliente.endereco = endereco;

    console.log(JSON.stringify(cliente));

    cliente = await this.clienteService.save(cliente);

    if (cliente.id != null) {
      this.id = cliente.id;
      console.log("Cliente salvo com sucesso.");
      console.log(cliente);
      this.falhou = true
    } else {
      this.falhou = false;
      console.log("Erro ao salvar o cliente.");
      console.log(cliente);
    }

  }

}
