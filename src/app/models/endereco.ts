import { Municipio } from './municipio';

export interface Endereco {
    Id:Number;
    Rua:String;
    Bairro:String;
    Numero:String;
    Logradouro:String;
    CEP:String;
    Complemento:String;
    IDMunicipio:Municipio;
}
