import { Categoria } from './categoria';
import { Cliente } from './cliente';
import { Fornecedor } from './fornecedor';

export class Evento {
    id: Number;
    valor: Number;
    dataInicio: Date;
    horaInicio: Date;
    dataFim: Date;
    horaFim: Date;
    categoria: Categoria;
    cliente: Cliente;
    fornecedores: Fornecedor[];
}
