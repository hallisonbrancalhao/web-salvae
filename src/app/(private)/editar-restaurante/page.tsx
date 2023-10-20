import EditarRestaurantesPage from "@/framework/screens/editar-restaurantes-page/editar-restaurantes-page";
import { EstabelecimentoRepository } from "@/services/repositories/estabelecimentos.repository";

export default async function EditarRestaurantes() {
  const estabelecimentoRepository = new EstabelecimentoRepository()
  const estabelecimento = await estabelecimentoRepository.ListarPorId('6531e2972e0fb203e85400da')
  
  return (
    <>
      <EditarRestaurantesPage estabelecimento={estabelecimento}/>
    </>
  );
}
