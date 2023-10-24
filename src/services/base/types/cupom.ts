export interface Cupom {
    _id: string,
    restaurante: string,
    nome: string,
    sobre: string,
    uploadedImage: string|null,
    categoria: string[],
    dias: string[],
};
