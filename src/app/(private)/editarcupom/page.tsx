import EditarCupomPage from "@/framework/screens/editar-cupom-page/editar-cupom-page";
import { Estabelecimento } from "@/services/base/types/estabelecimento";
import { getEstabelecimento } from "@/services/repositories/get-estabelecimentos";
import { CupomRepository } from '@/services/repositories/cupom.repository';

export default async function CadastroCupom() {
  const estabelecimento: Estabelecimento[] = await getEstabelecimento().then(res => res)
  const cupomID = new CupomRepository()
  const dadosExistente = await cupomID.Listar('65319b1a2e0fb203e8540087')
  
  return (
    <>
      <EditarCupomPage
        estabelecimento={estabelecimento}
        cupom={{ _id:dadosExistente._id, restaurante: dadosExistente.restaurante, nome: dadosExistente.nome, 
          sobre: dadosExistente.sobre, uploadedImage: dadosExistente.uploadedImage,
          categoria: dadosExistente.categoria, dias: dadosExistente.dias}}
      />
    </>
  );
}
