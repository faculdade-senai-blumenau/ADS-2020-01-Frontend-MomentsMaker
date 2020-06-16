import { Fornecedor } from './fornecedor';
import { Cliente } from './cliente';

export interface FornecedorEvento {
    IdFornecedor: Fornecedor;
    IdCliente:Cliente;
    Suplente:Boolean;
    Tipo_Fornecedor:BigInt;
}
