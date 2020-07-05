import { Categoria } from './categoria';
import { Cliente } from './cliente';
import { Fornecedor } from './fornecedor';

export class Evento {
    id:Number;
    valor:Number;
    dataInicio:String;
    dataFim:String;
    categoria:Categoria;
    cliente:Cliente;
    fornecedor:Fornecedor;
}
