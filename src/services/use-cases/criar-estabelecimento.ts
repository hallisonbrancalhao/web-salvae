import { FormEstabelecimentoProps } from "@/core/base";
import { AuthContextType } from "@/core/context";
import FormData from "form-data";

export async function criarEstabelecimentoUseCase(
  data: FormEstabelecimentoProps,
  auth: AuthContextType
) {
  console.log(data);

  const formdata = new FormData();

  formdata.append("nome", data.estabelecimento.nome);
  formdata.append("cnpj", data.estabelecimento.cnpj);
  formdata.append("senha", data.estabelecimento.senha);
  formdata.append("instagram", data.estabelecimento.instagram);
  formdata.append("whatsapp", data.estabelecimento.whatsapp);
  formdata.append("fotoPerfil", data.estabelecimento.fotoPerfil[0]);
  formdata.append("fotoCapa", data.estabelecimento.fotoCapa[0]);
  formdata.append(
    "estabelecimentoCategoria",
    data.estabelecimento.estabelecimentoCategoria
  );
  formdata.append("cep", data.estabelecimento.cep);
  formdata.append("logradouro", data.estabelecimento.logradouro);
  formdata.append("numero", data.estabelecimento.numero);
  formdata.append("bairro", data.estabelecimento.bairro);
  formdata.append("complemento", data.estabelecimento.complemento);
  formdata.append("cidade", data.estabelecimento.cidade);
  formdata.append("estado", data.estabelecimento.estado);
  formdata.append("pais", data.estabelecimento.pais);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  if (!auth.token) return;
  const res = await fetch(
    process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/estabelecimento",
    requestOptions as any
  );

  return true;
}
