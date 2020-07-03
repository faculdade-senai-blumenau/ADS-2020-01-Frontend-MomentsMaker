import { Categoria } from './categoria';
import { Cliente } from './cliente';
import { Fornecedor } from './fornecedor';

export class Evento {
    id:Number;
    valor:Number;
    criacao:String;
    dataInicio:Date;
    dataFim:Date;
    horaInicio:Date;
    horaFim:Date;
    categoria:Categoria;
    cliente:Cliente;
    fornecedor:Fornecedor[];
}
