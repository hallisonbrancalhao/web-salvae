import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { Cupons } from "../base";

export default function useCupom() {
  const auth = useContext(AuthContext);

  const [cupom, setCupom] = useState<Cupons[]>(
    []
  );

  const listaCupom = useCallback(async () => {
    if (!auth.token) return;
    try {
      console.log("auth.token", auth.token);
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL_API + "/cupom",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      ).then((res) => res.json());
      if (response) {
        setCupom(response);
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth.token]);

  const excluirCupom = useCallback(
    async (cnpj: string) => {
      if (!auth.token) return;
      try {
        await fetch(
          process.env.NEXT_PUBLIC_URL_API + "/cupom/" + cnpj,
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
    listaCupom();
  }, [listaCupom]);

  return {
    cupom,
    listaCupom,
    excluirCupom,
  };
}
