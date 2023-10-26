// import axios from "axios";
// import { Patrocinadores } from "../../core/base/types/patrocinadores";
// import { URL_PATROCINADOR } from "@/framework/constantes/URL.API";

// export class PatrocinadorRepository {
//   constructor() {}

//   async Salvar(data: Patrocinadores) {
//     try {
//       await axios.post(URL_PATROCINADOR, {
//         nome: data.nome,
//         foto: data.foto,
//         status: true
//       });
//       console.log("Funcionou");
//     } catch (error) {
//       console.log("Erro no cadastro");
//     }
//   }

//   async EditarStatus(data: Patrocinadores) {
//     const id = data._id;
//     await axios.put(`${URL_PATROCINADOR}/${id}`, {
//       status: data.status,
//     });
//   }

//   async Editar(data: Patrocinadores) {
//     console.log(data)
//     const id = data._id;
//     await axios.put(`${URL_PATROCINADOR}/${id}`, {
//       nome: data.nome,
//       foto: data.foto,
//     });
//   }

//   async ListarPorId(id: string) {
//     const cupom = await axios.get(`${URL_PATROCINADOR}/${id}`);
//     return cupom.data;
//   }

//   async Listar() {
//     const res = await axios.get(URL_PATROCINADOR);
//     return res.data;
//   }

//   async Deletar(id: string) {
//     axios.delete(`${URL_PATROCINADOR}/${id}`);
//   }
// }
