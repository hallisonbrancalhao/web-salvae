import { IEstabelecimento } from "../../core/base/types/estabelecimento.interface";

export class EstabelecimentoRepository {
  constructor() {}

  async EditarStatus(data: IEstabelecimento) {
    // const id = data._id;
    // await axios.patch(`${URL_RESTAURANTE}/${id}`, {
    //   status: data.status,
    // });
  }

  async Editar(data: IEstabelecimento) {
    // const id = data._id;
    // await axios.patch(`${URL_RESTAURANTE}/${id}`, {
    //   cnpj: data.cnpj,
    //   nome: data.nome,
    //   whatsapp: data.whatsapp,
    //   instagram: data.instagram,
    //   fotoPerfil: data.fotoPerfil,
    //   fotoCapa: data.fotoCapa,
    //   senha: data.senha,
    //   categoria: data.categoria,
    //   endereco: {
    //     cep: data.endereco.cep,
    //     rua: data.endereco.logradouro,
    //     complemento: data.endereco.complemento,
    //     numero: data.endereco.numero,
    //     bairro: data.endereco.bairro,
    //     cidade: data.endereco.cidade,
    //     estado: data.endereco.estado,
    //   },
    //   avaliacao: data.avaliacao,
    //   status: data.status,
    // });
  }
}