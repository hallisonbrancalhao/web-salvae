import EditarCupomPage from "@/framework/screens/editar-cupom-page/editar-cupom-page";
import { CupomRepository } from '@/services/repositories/cupom.repository';
import { EstabelecimentoRepository } from "@/services/repositories/estabelecimentos.repository";

export default async function CadastroCupom() {
  const estabelecimentoRepository = new EstabelecimentoRepository()
  const estabelecimento = await estabelecimentoRepository.Listar()
  const cupomID = new CupomRepository()
  const dadosExistente = await cupomID.Listar('653233252e0fb203e85402b4')
  
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
