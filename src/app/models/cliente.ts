import { Endereco } from './endereco';
import { Login } from './login';

export interface Cliente {
    Id:Number;
    CPF:String;
    Sexo:Number;
    IdEndereco:Endereco;
    Data_Nascimento:Date;
    Nome:String;
    Sobrenome:String;
    IdLogin:Login;
    Media_Avaliacao:Number;
}
