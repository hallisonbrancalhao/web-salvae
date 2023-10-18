import axios from "axios"
import { Cupom } from "../base/types/cupom";
import { URL_CUPOM } from "@/framework/constantes/URL.API";

export async function SalvaCupom(data:Cupom) {
    try {
        await axios.post(URL_CUPOM, {
            restaurante: data.restaurante,
            nome: data.nome,
            sobre: data.sobre,
            uploadedImage: data.uploadedImage,
            categoria: data.categoria,
            dias: data.dias,
        });
        console.log("Funcionou")
    } catch (error) {
        console.log("Erro no cadastro")
    };
};
