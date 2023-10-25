import { AuthData } from "@/core/base";

export async function singIn(
  cnpj: string,
  senha: string
): Promise<AuthData | undefined> {
  try {
    // const data = await fetch(
    //   `${process.env.NEXT_PUBLIC_URL_API}/login/estabelecimento`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ cnpj, senha }),
    //   }
    // );
    const data = await api("login/estabelecimento", "POST", { cnpj, senha }).then((res) => res.json())
    console.log("data:", data);

    if (data.access_token) {
      return {
        access_token: data.access_token,
        user: data.user,
      };
    }
    return undefined;
  } catch (error) {
    throw new Error("Usuário ou senha inválidos");
  }
}