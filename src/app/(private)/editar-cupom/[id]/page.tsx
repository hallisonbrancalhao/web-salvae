import EditarCupomPage from "@/framework/screens/editar-cupom/editar-cupom-page";
import { CupomRepository } from '@/services/repositories/cupom.repository';
import { EstabelecimentoRepository } from "@/services/repositories/estabelecimentos.repository";

export default async function EditarCupom({ params }: { params: {id: string}}) {
  const estabelecimentoRepository = new EstabelecimentoRepository()
  const estabelecimento = await estabelecimentoRepository.Listar()
  const cupomID = new CupomRepository()
  const dadosExistente = await cupomID.ListarPorId(params.id)
  
  return (
    <>
      <EditarCupomPage
        estabelecimento={estabelecimento}
        cupom={{ _id:dadosExistente._id, restaurante: dadosExistente.restaurante, nome: dadosExistente.nome, 
          sobre: dadosExistente.sobre, foto: dadosExistente.foto, status: dadosExistente.status,  
          categoria: dadosExistente.categoria, dias: dadosExistente.dias}}
      />
    </>
  );
}
