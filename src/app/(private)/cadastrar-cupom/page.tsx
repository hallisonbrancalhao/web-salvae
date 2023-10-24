import CadastroCupomPage from "@/framework/screens/cadastro-cupom-page/cadastro-cupom-page";
import { EstabelecimentoRepository } from "@/services/repositories/estabelecimentos.repository";

export default async function CadastroCupom() {
  const estabelecimentoRepository = new EstabelecimentoRepository()
  const estabelecimento = await estabelecimentoRepository.Listar()
  return (
    <>
      <CadastroCupomPage estabelecimento={estabelecimento}/>
    </>
  );
}
