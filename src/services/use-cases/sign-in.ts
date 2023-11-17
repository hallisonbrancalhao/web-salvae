import { AuthData } from "@/core/base";
import { apiRequest } from "..";

export async function singIn(
  cnpj: string,
  senha: string,
): Promise<AuthData | undefined> {
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/login/estabelecimento",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cnpj,
          senha,
        }),
      }
    ).then((response) => response.json());

    if (data.access_token) {
      return {
        access_token: data.access_token,
        user: data.estabelecimento,
        role: data.estabelecimento.role,
      };
    }
    return undefined;
  } catch (error) {
    console.error(error);
    throw new Error("Usuário ou senha inválidos");
  }
}
