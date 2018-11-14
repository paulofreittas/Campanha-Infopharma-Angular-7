import { drogaria } from "./drogaria";

export class contatoDrogaria {
    id:number;
    drogariaIdFk: number;
    dataUltimaAlteracao: Date;
    observacao: string;
    tipoProposta: number;
    status: number;
    drogaria: drogaria;
}