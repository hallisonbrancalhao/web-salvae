export interface PromocaoUpdateDto {

    id:                number;
    descricao:         string;
    status:            boolean;
    promocaoCategoria: PromocaoCategoria[];
    promocaoDia:       [number];
    estabelecimento:   Estabelecimento;
    idEstabelecimento: number;
}

export interface Estabelecimento {
    id:                       number;
    cnpj:                     string;
    nome:                     string;
    senha:                    string;
    whatsapp:                 string;
    instagram:                string;
    fotoPerfil:               string;
    fotoCapa:                 string;
    status:                   boolean;
    createdAt:                string;
    updatedAt:                string;
    deletedAt:                null;
    endereco:                 Endereco;
    coordenadas:              Coordenadas;
    estabelecimentoCategoria: EstabelecimentoCategoria;
}

export interface Coordenadas {
    id:        number;
    latitude:  string;
    longitude: string;
}

export interface Endereco {
    id:          number;
    cep:         string;
    complemento: string;
    numero:      string;
    logradouro:  string;
    bairro:      string;
    cidade:      string;
    estado:      string;
    pais:        string;
}

export interface EstabelecimentoCategoria {
    id:    number;
    nome:  string;
    icone: string;
}

export interface PromocaoCategoria {
    id:   number;
    nome: string;
}
