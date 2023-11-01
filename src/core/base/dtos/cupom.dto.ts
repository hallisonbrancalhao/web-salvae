import { CategoriaCupomDto } from ".";

export interface CupomDto {
    id: string,
    restaurante:string,
    nome:string,
    sobre:string,
    foto: string,
    categoria: CategoriaCupomDto,
    // dias: [boolean],
    status: boolean,
};
