import { Categoria } from './categoria';
import { Cliente } from './cliente';

export interface Evento {
    Id:Number;
    Valor:Number;
    Criacao:Date;
    DataInicio:Date;
    DataFim:Date;
    HoraInicio:Date;
    HoraFim:Date;
    Categoria:Categoria;
    Cliente:Cliente;
}
