import { Endereco } from './endereco';
import { Login } from './login';

export interface Fornecedor {
    id: number;
    cnpj_cpf: string;
    nome_fantasia: string;
    tipoProfissional: number;
    razao_social: string;
    ehSuplent: boolean;
    idEndereco: Endereco;
    pessoaFisica: boolean;
    idLogin: Login;
    mediaAvaliacao: number;
}
