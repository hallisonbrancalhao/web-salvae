import axios from "axios";
import { Cupons } from "../base/types/cupons";
import { URL_CUPOM } from "@/framework/constantes/URL.API";

export class CupomRepository {
  constructor() {}

  async Salvar(data: Cupons) {
    try {
      await axios.post(URL_CUPOM, {
        restaurante: data.restaurante,
        nome: data.nome,
        sobre: data.sobre,
        foto: data.foto,
        categoria: data.categoria,
        dias: data.dias,
      });
      console.log("Funcionou");
    } catch (error) {
      console.log("Erro no cadastro");
    }
  }

  async EditarStatus(data: Cupons) {
    const id = data._id;
    await axios.put(`${URL_CUPOM}/${id}`, {
      status: data.status,
    });
  }

  async Editar(data: Cupons) {
    console.log(data)
    const id = data._id;
    await axios.put(`${URL_CUPOM}/${id}`, {
      restaurante: data.restaurante,
      nome: data.nome,
      sobre: data.sobre,
      foto: data.foto,
      categoria: data.categoria,
      dias: data.dias,
    });
  }

  async ListarPorId(id: string) {
    const cupom = await axios.get(`${URL_CUPOM}/${id}`);
    return cupom.data;
  }

  async Listar() {
    const res = await axios.get(URL_CUPOM);
    return res.data;
  }

  async Deletar(id: string) {
    axios.delete(`${URL_CUPOM}/${id}`);
  }
}
