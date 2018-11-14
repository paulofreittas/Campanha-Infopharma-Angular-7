import { funcionario } from "./funcionario";

export class drogaria {
    id: number;
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    nomeContato: string;
    cidade: string;
    estado: string;
    funcionarioIdFk: number;
    funcionario: funcionario;
}