import { Fornecedor } from './fornecedor';
import { Cliente } from './cliente';

export interface Contato {
    Id:Number;
    Email:String;
    Tel_Residencial:String;
    Tel_Celular:String;
    IdFornecedor:Fornecedor;
    IdCliente:Cliente;
}
