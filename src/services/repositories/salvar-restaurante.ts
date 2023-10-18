import axios from "axios";
import { URL_RESTAURANTE } from "@/framework/constantes/URL.API";
import { Estabelecimento } from "../base/types/estabelecimento";

export async function SalvaRestaurante(data: Estabelecimento) {
  try {
    await axios.post(URL_RESTAURANTE, {
      cnpj: data.cnpj,
      nome: data.nome,
      whatsapp: data.whatsapp,
      instagram: data.instagram,
      fotoPerfil: data.fotoPerfil,
      senha: data.senha,
      endereco: {
        cep: data.endereco.cep,
        rua: data.endereco.rua,
        complemento: data.endereco.complemento,
        numero: data.endereco.numero,
        bairro: data.endereco.bairro,
        cidade: data.endereco.cidade,
        estado: data.endereco.estado,
      },
    });
    console.log("Funcionou");
  } catch (error) {
    console.log("Erro no cadastro");
  }
}
