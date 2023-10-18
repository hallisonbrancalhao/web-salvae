import { EnderecoEstabelecimento } from "./endenreco-estabelecimento";

export interface Estabelecimento {
    cnpj:string,
    nome:string,
    senha:string,
    instagram:string,
    whatsapp:string,
    fotoPerfil:string|null,
    fotoCapa:string|null,
    categoria: string[],
    endereco: EnderecoEstabelecimento
};
