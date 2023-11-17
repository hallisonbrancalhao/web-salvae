import { File } from "buffer";
export interface EstabelecimentoUpdateDto {
  id: number;
  cnpj: string;
  nome: string;
  senha: string;
  instagram: string;
  whatsapp: string;
  fotoPerfil: File | null;
  fotoCapa: File | null;
  estabelecimentoCategoria: string;
  status: boolean;
  endereco: {
    cep: string;
    logradouro: string;
    complemento: string | null;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string | null;
  };
}
