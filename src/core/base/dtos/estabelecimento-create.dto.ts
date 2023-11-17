import { File } from "buffer";
export interface EstabelecimentoCreateDto {
  id: number;
  cnpj: string;
  nome: string;
  senha: string;
  instagram: string;
  whatsapp: string;
  fotoPerfil: File;
  fotoCapa: File;
  estabelecimentoCategoria: string;
  cep: string;
  logradouro: string;
  complemento: string | null;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string | null;
  status: boolean;
}
