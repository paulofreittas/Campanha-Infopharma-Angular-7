import { usuarioIdFkNavigation } from "./usuarioIdFkNavigation";


export class contatoUsuarioCampanha {
    idPk: number;
    dataInclusao: Date;
    dataAlteracao: Date;
    clienteIdFk: number;
    usuarioIdFk: number;
    campanhaRenovacaoIdFk: number;
    observacao?: any;
    tipoProposta: number;
    dataRetorno: Date;
    status: number;
    campanhaRenovacaoIdFkNavigation?: any;
    usuarioIdFkNavigation: usuarioIdFkNavigation;
}