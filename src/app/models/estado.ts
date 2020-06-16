import { Pais } from './pais';

export interface Estado {
    Id:Number;
    Nome:String;
    Sigla:String;
    IdPais:Pais;
}
