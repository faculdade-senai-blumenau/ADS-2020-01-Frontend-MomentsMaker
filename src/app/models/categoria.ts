import { Fornecedor } from './fornecedor';
import { Cliente } from './cliente';

export interface Categoria {
  Id:BigInt;
  Nome:String;
  Tipo_Profissional: String;
  Descricao:String;
}
