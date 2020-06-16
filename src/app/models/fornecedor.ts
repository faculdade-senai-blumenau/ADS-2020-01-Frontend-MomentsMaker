import { Endereco } from './endereco';
import { Login } from './login';

export interface Fornecedor {
    Id:BigInt;
    Cnpj_Cpf:String;
    Nome_Fatasia:String;
    Tipo_Fornecedor:BigInt;
    Razao_Social:String;
    Suplent:Boolean;
    IdEndereco:Endereco;
    Pessoa_Fisica:Boolean;
    IdLogin:Login;
    MediaAvaliacao:Number;
}
