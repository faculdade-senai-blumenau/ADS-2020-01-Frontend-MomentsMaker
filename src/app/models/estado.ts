import { Pais } from './pais';

export interface Estado {
    Id:BigInt;
    Nome:String;
    Sigla:String;
    IdPais:Pais;
}
