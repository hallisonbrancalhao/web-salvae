import Cupons from "@/framework/screens/dash-cupom/cupom-page";
import { CupomRepository } from "@/services/repositories";

export default async function Cupom() {
  const cupomRepository = new CupomRepository
  const cupom = await cupomRepository.Listar()
  return (
    <section>
      <Cupons
        cupom={cupom} />
    </section>
  );
}
