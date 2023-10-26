import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { Estabelecimento } from "../base";

export default function useEstabelecimento() {
  const auth = useContext(AuthContext);

  const [estabelecimento, setEstabelencimento] = useState<Estabelecimento[]>(
    []
  );

  const listarEstabelecimento = useCallback(async () => {
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

  const criarEstabelecimento = useCallback(
    async (data: Estabelecimento) => {
      if (!auth.token) return;
      const body = {
        cnpj: data.cnpj,
        nome: data.nome,
        senha: data.senha,
        endereco: {
          cep: data.endereco.cep,
          logradouro: data.endereco.logradouro,
          complemento: data.endereco.complemento,
          numero: data.endereco.numero,
          bairro: data.endereco.bairro,
          cidade: data.endereco.cidade,
          estado: data.endereco.estado,
        },
        whatsapp: data.whatsapp,
        instagram: data.instagram,
        fotoPerfil: data.fotoPerfil,
        fotoCapa: data.fotoCapa,
        categoria: data.categoria,
        avaliacao: data.avaliacao,
        status: data.status,
      };
      try {
        await fetch(
          process.env.NEXT_PUBLIC_URL_API + "/estabelecimento/" + data.cnpj,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    [auth.token]
  );

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
    listarEstabelecimento();
  }, [listarEstabelecimento]);

  return {
    estabelecimento,
    listarEstabelecimento,
    excluirEstabelecimento,
    criarEstabelecimento,
  };
}
