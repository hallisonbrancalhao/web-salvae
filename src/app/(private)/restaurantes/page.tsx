import Restaurantes from "@/framework/screens/dash-restaurantes/restaurantes-page";
import { EstabelecimentoRepository } from "@/services/repositories";

export default async function Restaurante() {
  const estabelecimentoRepository = new EstabelecimentoRepository
  const estabelecimento = await estabelecimentoRepository.Listar()
  return (
    <section>
      <Restaurantes
        estabelecimento={estabelecimento} />
    </section>
  );
}
