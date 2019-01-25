

export class usuarioIdFkNavigation {
    idPk: number;
    codigo: number;
    dataInclusao: Date;
    dataAlteracao: Date;
    username: string;
    password: string;
    email: string;
    inativo: boolean;
    regrausuarioIdFk: number;
    emailPassword: string;
    fornecedorIdFk: number;
    nome?: any;
    rg?: any;
    cpf?: any;
    endereco?: any;
    cep?: any;
    comissionado?: any;
    comissao?: any;
    cidadeIdFk?: any;
    bairroIdFk?: any;
    shortcuts: string;
    cor: number;
    bairroIdFkNavigation?: any;
    cidadeIdFkNavigation?: any;
    fornecedorIdFkNavigation?: any;
    regrausuarioIdFkNavigation?: any;
    comissaousuario: any[];
    contatousuariocampanha: any[];
    emailmarketing: any[];
    historiconovosservicos: any[];
    permissaousuario: any[];
    proposta: any[];
    solicitacaopropostas: any[];
    telefone: any[];
}