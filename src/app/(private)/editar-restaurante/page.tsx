import EditarRestaurantesPage from "@/framework/screens/editar-restaurantes-page/editar-restaurantes-page";
import { EstabelecimentoRepository } from "@/services/repositories/estabelecimentos.repository";

export default async function EditarRestaurantes() {
  const estabelecimentoRepository = new EstabelecimentoRepository()
  const estabelecimento = await estabelecimentoRepository.ListarPorId("6536f2502e0fb203e8540e7c")
  
  return (
    <>
      <EditarRestaurantesPage estabelecimento={estabelecimento}/>
    </>
  );
}
