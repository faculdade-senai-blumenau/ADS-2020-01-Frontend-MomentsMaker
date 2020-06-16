import { Endereco } from './endereco';
import { Login } from './login';

export interface Cliente {
    Id:BigInt;
    CPF:String;
    Sexo:BigInt;
    IdEndereco:Endereco;
    Data_Nascimento:Date;
    Nome:String;
    Sobrenome:String;
    IdLogin:Login;
    Media_Avaliacao:Number;
}
