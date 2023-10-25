import { EnderecoEstabelecimento } from "./endereco-estabelecimento";

export interface Estabelecimento {
    _id: string,
    cnpj:string,
    nome:string,
    senha:string,
    instagram:string,
    whatsapp:string,
    fotoPerfil:string|null,
    fotoCapa:string|null,
    categoria: string[],
    endereco: EnderecoEstabelecimento
    avaliacao: number
    status: boolean
};
