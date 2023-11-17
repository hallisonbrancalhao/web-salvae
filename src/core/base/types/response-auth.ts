export interface ResponseAuth {
  access_token: string;
  estabelecimento: Estabelecimento;
  role: number;
}

export interface Estabelecimento {
  cnpj: string;
  nome: string;
  endereco: Endereco;
}

export interface Endereco {
  id: number;
  cep: string;
  complemento: null;
  numero: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
}
