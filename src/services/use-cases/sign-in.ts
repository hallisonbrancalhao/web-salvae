import { AuthData } from "@/core/base";
import { apiRequest } from "..";

export async function singIn(
  cnpj: string,
  senha: string
): Promise<AuthData | undefined> {
  try {
    const data = await apiRequest("login/estabelecimento", "POST", {
      cnpj,
      senha,
    }).then((res) => res.json());

    if (data.access_token) {
      return {
        access_token: data.access_token,
        user: data.user,
      };
    }
    return undefined;
  } catch (error) {
    console.error(error);
    throw new Error("Usuário ou senha inválidos");
  }
}
