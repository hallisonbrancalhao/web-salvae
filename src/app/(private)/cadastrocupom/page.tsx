import CadastroCupomPage from "@/framework/screens/cadastro-cupom-page/cadastro-cupom-page";
import { Estabelecimento } from "@/services/base/types/estabelecimento";
import { getEstabelecimento } from "@/services/repositories/get-estabelecimentos";

export default async function CadastroCupom() {
  const estabelecimento: Estabelecimento[] = await getEstabelecimento().then(res => res)
  return (
    <>
      <CadastroCupomPage estabelecimento={estabelecimento}/>
    </>
  );
}
