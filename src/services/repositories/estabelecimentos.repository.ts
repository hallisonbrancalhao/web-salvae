import axios from "axios";
import { URL_RESTAURANTE } from "@/framework/constantes/URL.API";
import { Estabelecimento } from "../base/types/estabelecimento";

export class EstabelecimentoRepository {
  constructor() {}

  async Salvar(data: Estabelecimento) {
    try {
      await axios.post(URL_RESTAURANTE, {
        cnpj: data.cnpj,
        nome: data.nome,
        senha: data.senha,
        endereco: {
          cep: data.endereco.cep,
          logradouro: data.endereco.logradouro,
          complemento: data.endereco.complemento,
          numero: data.endereco.numero,
          bairro: data.endereco.bairro,
          cidade: data.endereco.cidade,
          estado: data.endereco.estado,
        },
        whatsapp: data.whatsapp,
        instagram: data.instagram,
        fotoPerfil: data.fotoPerfil,
        fotoCapa: data.fotoCapa,
        categoria: data.categoria,
        avaliacao: data.avaliacao,
        status: data.status,
      });
      console.log("Funcionou");
    } catch (error) {
      console.log("Erro no cadastro");
    }
  }

  async EditarStatus(data: Estabelecimento) {
    const id = data._id;
    await axios.patch(`${URL_RESTAURANTE}/${id}`, {
      status: data.status,
    });
  }

  async Editar(data: Estabelecimento) {
    const id = data._id;
    await axios.patch(`${URL_RESTAURANTE}/${id}`, {
      cnpj: data.cnpj,
      nome: data.nome,
      whatsapp: data.whatsapp,
      instagram: data.instagram,
      fotoPerfil: data.fotoPerfil,
      fotoCapa: data.fotoCapa,
      senha: data.senha,
      categoria: data.categoria,
      endereco: {
        cep: data.endereco.cep,
        rua: data.endereco.logradouro,
        complemento: data.endereco.complemento,
        numero: data.endereco.numero,
        bairro: data.endereco.bairro,
        cidade: data.endereco.cidade,
        estado: data.endereco.estado,
      },
      avaliacao: data.avaliacao,
      status: data.status,
    });
  }

  async ListarPorId(id: string) {
    const cupom = await axios.get(`${URL_RESTAURANTE}/${id}`);
    return cupom.data;
  }

  async Listar() {
    const res = await axios.get(URL_RESTAURANTE);
    return res.data;
  }

  async Deletar(id: string) {
    await axios.delete(`${URL_RESTAURANTE}/${id}`);
  }
}
