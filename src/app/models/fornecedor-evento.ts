import { Fornecedor } from './fornecedor';
import { Evento } from './evento';

export interface FornecedorEvento {
    IdFornecedor: Fornecedor;
    IdEvento:Evento;
    Suplente:Boolean;
    Tipo_Fornecedor:Number;
}
