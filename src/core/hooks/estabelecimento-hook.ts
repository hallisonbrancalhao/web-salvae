import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { Estabelecimento } from "../base";

export default function useEstabelecimento() {
  const auth = useContext(AuthContext);

  const [estabelecimento, setEstabelencimento] = useState<Estabelecimento[]>(
    []
  );

  const listEstabelecimento = useCallback(async () => {
    if (!auth.token) return;
    try {
      console.log("auth.token", auth.token);
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL_API + "/estabelecimento",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      ).then((res) => res.json());
      if (response) {
        setEstabelencimento(response);
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth.token]);

  const excluirEstabelecimento = useCallback(
    async (cnpj: string) => {
      if (!auth.token) return;
      try {
        await fetch(
          process.env.NEXT_PUBLIC_URL_API + "/estabelecimento/" + cnpj,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    [auth.token]
  );

  useEffect(() => {
    listEstabelecimento();
  }, [listEstabelecimento]);

  return {
    estabelecimento,
    listEstabelecimento,
    excluirEstabelecimento,
  };
}
