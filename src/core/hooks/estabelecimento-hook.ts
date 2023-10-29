import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { Estabelecimento } from "../base";

export default function useEstabelecimento() {
  const auth = useContext(AuthContext);

  const [estabelecimento, setEstabelencimento] = useState<Estabelecimento | null>(
    null
  );

  const [listaEstabelecimento, setListaEstabelencimento] = useState<Estabelecimento[] | null>(
    []
  );

  const listarEstabelecimento = useCallback(async () => {
    if (!auth.token) return;
    console.log(auth.token);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/estabelecimento",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      ).then((res) => res.json());
      if (response) {
        setListaEstabelencimento(response);
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth.token]);

  const listarEstabelecimentoPorId = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      console.log(auth.token);
      try {
        const response: Estabelecimento | null = await fetch(
          process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/estabelecimento/" + id,
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
    },
    [auth.token]
  );

  const criarEstabelecimento = useCallback(
    async (data: Estabelecimento) => {
      if (!auth.token) return;
      const body = {
        cnpj: data.cnpj,
        nome: data.nome,
        senha: data.senha,
        endereco: {
          cep: data.endereco.cep,
          complemento: data.endereco.complemento,
          numero: data.endereco.numero,
          logradouro: data.endereco.logradouro,
          bairro: data.endereco.bairro,
          cidade: data.endereco.cidade,
          estado: data.endereco.estado,
          pais: data.endereco.pais,
        },
        whatsapp: data.whatsapp,
        instagram: data.instagram,
        fotoPerfil: data.fotoPerfil,
        fotoCapa: data.fotoCapa,
        //        categoria: data.categoria,
        //        avaliacao: data.avaliacao,
        status: true,
      };
      try {
        await fetch(process.env.NEXT_PUBLIC_URL_RESTAURANTE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        console.log("deu bom");
        return true;
      } catch (error) {
        console.log("deu ruim");
      }
    },
    [auth.token]
  );

  const editarEstabelecimento = useCallback(
    async (data: Estabelecimento) => {
      if (!auth.token) return;
      const body = {
        cnpj: data.cnpj,
        nome: data.nome,
        senha: data.senha,
        endereco: {
          cep: data.endereco.cep,
          complemento: data.endereco.complemento,
          numero: data.endereco.numero,
          logradouro: data.endereco.logradouro,
          bairro: data.endereco.bairro,
          cidade: data.endereco.cidade,
          estado: data.endereco.estado,
          pais: data.endereco.pais,
        },
        whatsapp: data.whatsapp,
        instagram: data.instagram,
        fotoPerfil: data.fotoPerfil,
        fotoCapa: data.fotoCapa,
        //        categoria: data.categoria,
        //        avaliacao: data.avaliacao,
        status: true,
      };
      try {
        await fetch(process.env.NEXT_PUBLIC_URL_RESTAURANTE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        console.log("deu bom");
        return true;
      } catch (error) {
        console.log("deu ruim");
      }
    },
    [auth.token]
  );

  const excluirEstabelecimento = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      try {
        await fetch(
          process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/estabelecimento/" + id,
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
    listaEstabelecimento,
    listarEstabelecimentoPorId,
    listarEstabelecimento,
    excluirEstabelecimento,
    criarEstabelecimento,
    editarEstabelecimento,
  };
}
