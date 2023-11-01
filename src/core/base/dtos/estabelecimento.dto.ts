import { EnderecoDto } from "./endereco.dto";
export interface EstabelecimentoDto {
    id: string,
    cnpj:string,
    nome:string,
    senha:string,
    instagram:string,
    whatsapp:string,
    fotoPerfil: File,
    fotoCapa:string|null,
    categoria: string,
    endereco: EnderecoDto
    status: boolean
};
