import EditarRestaurantesPage from "@/framework/screens/editar-restaurantes-page/editar-restaurantes-page";
import { EstabelecimentoRepository } from "@/services/repositories/estabelecimentos.repository";

export default async function EditarRestaurantes() {
  const estabelecimentoRepository = new EstabelecimentoRepository()
  const estabelecimento = await estabelecimentoRepository.ListarPorId("653277972e0fb203e85404d2")
  
  return (
    <>
      <EditarRestaurantesPage estabelecimento={estabelecimento}/>
    </>
  );
}
