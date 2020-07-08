import { Endereco } from './endereco';
import { Login } from './login';

export class Fornecedor {
    id:number;
    cnpj_cpf:String;
    nome_fantasia:String;
    tipoProfissional:Number;
    razao_social:String;
    ehSuplent:Boolean;
    idEndereco:Endereco;
    pessoaFisica:Boolean;
    idLogin:Login;
    mediaAvaliacao:Number;
}
