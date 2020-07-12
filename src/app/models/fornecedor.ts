import { Endereco } from './endereco';
import { Login } from './login';
import { Categoria } from './categoria';

export class Fornecedor {
    id: number;
    cnpj_cpf: string;
    nome_fantasia: string;
    tipoProfissional: string;
    razao_social: string;
    ehSuplent: boolean;
    idEndereco: Endereco;
    pessoaFisica: boolean;
    idLogin: Login;
    mediaAvaliacao: number;
    categorias: Categoria[];
}
