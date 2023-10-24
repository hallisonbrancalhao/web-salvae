import EditarRestaurantesPage from "@/framework/screens/editar-restaurantes/editar-restaurantes-page";
import { EstabelecimentoRepository } from "@/services/repositories/estabelecimentos.repository";

export default async function EditarRestaurantes({ params }: { params: {id: string}}) {
  const estabelecimentoRepository = new EstabelecimentoRepository()
  const estabelecimento = await estabelecimentoRepository.ListarPorId(params.id)
  
  return (
    <>
      <EditarRestaurantesPage estabelecimento={estabelecimento}/>
    </>
  );
}
