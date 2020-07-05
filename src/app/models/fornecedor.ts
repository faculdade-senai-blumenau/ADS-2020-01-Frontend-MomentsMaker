import { Endereco } from './endereco';
import { Login } from './login';

export interface Fornecedor {
    id:Number;
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
