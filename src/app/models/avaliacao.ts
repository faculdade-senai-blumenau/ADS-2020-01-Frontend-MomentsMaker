import { Fornecedor } from './fornecedor';
import { Cliente } from './cliente';

export interface Avaliacao {
    Id:BigInt;
    Comentario:String;
    Nota:Number;
    IdFornecedor:Fornecedor;
    IdCliente:Cliente;
}
