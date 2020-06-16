import { Estado } from './estado';

export interface Municipio {
    Id:BigInt;
    Nome:String;
    IdEstado:Estado;
}
