import { Municipio } from './municipio';

export class Endereco {
    id: number;
    rua: string;
    bairro: string;
    numero: number;
    logradouro:String;
    cep: string;
    complemento: string;
    municipio: Municipio;
}
