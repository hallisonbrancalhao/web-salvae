export interface EnderecoDto {
    cep: string,
    logradouro: string,
    complemento: string|null,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string|null
};
