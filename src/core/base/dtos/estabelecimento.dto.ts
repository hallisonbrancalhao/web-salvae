import { EnderecoDto } from "./endereco.dto";
export interface EstabelecimentoDto {
    id: number,
    cnpj:string,
    nome:string,
    senha:string,
    instagram:string,
    whatsapp:string,
    fotoPerfil: string,
    fotoCapa: string,
    estabelecimentoCategoria: number,
    endereco: EnderecoDto
    status: boolean
};
