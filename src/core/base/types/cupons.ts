export interface Cupons {
    _id: string,
    restaurante: string,
    nome: string,
    sobre: string,
    foto: string|null,
    categoria: string[],
    dias: string[],
    status: boolean
};
