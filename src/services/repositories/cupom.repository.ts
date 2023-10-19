import axios from "axios";
import { Cupom } from "../base/types/cupom";
import { URL_CUPOM, URL_MOCK_CUPOM } from "@/framework/constantes/URL.API";

export class CupomRepository {
  constructor() {}

  async Salvar(data: Cupom) {
    try {
      await axios.post(URL_CUPOM, {
        restaurante: data.restaurante,
        nome: data.nome,
        sobre: data.sobre,
        uploadedImage: data.uploadedImage,
        categoria: data.categoria,
        dias: data.dias,
      });
      console.log("Funcionou");
    } catch (error) {
      console.log("Erro no cadastro");
    }
  }

  async Editar(data: Cupom) {
    try {
      const id = data._id
      await axios.put(`${URL_CUPOM}/${id}`, {
        restaurante: data.restaurante,
        nome: data.nome,
        sobre: data.sobre,
        uploadedImage: data.uploadedImage,
        categoria: data.categoria,
        dias: data.dias,
      });
      console.log("Funcionou");
    } catch (error) {
      console.log("Erro ao editar");
    }
  }

  async Listar(id: string) {
    const cupom = await axios.get(`${URL_MOCK_CUPOM}/${id}`);
    return cupom.data;
  }

  Deletar(id: string) {
    axios.delete(`${URL_MOCK_CUPOM}/${id}`);
  }
}
