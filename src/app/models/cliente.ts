import { Endereco } from './endereco';
import { Login } from './login';

export class Cliente {
    id: number;
    cpf: string;
    sexo: string;
    dataNascimento: Date;
    nome: string;
    sobrenome: string;
    login: Login;
    endereco: Endereco;
    mediaAvaliacao : number;
}
