import { CategoriaCupomDto } from ".";

export interface CupomDto {
    id: string,
    restaurante:number,
    nome:string,
    sobre:string,
    foto: File,
    categoria: CategoriaCupomDto,
    // dias: [boolean],
    status: boolean,
};
