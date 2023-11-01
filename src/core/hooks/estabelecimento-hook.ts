import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { IEstabelecimento } from "../base";
import { schemaFormEstabelecimento } from "@/core/base/schemas/estabelecimento-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormEstabelecimentoProps } from "../base/types/estabelecimento.zod";

export default function useEstabelecimento() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormEstabelecimento),
    defaultValues: {
      estabelecimento: {
        nome: "",
        cnpj: "",
        senha: "",
        validasenha: "",
        instagram: "",
        whatsapp: "",
        fotoPerfil: "",
        fotoCapa: "",
        categoria: "",
        endereco: {
          cep: "",
          logradouro: "",
          numero: "",
          bairro: "",
          complemento: "",
          cidade: "",
          estado: "",
          pais: "",
        },
      },
    },
  });

  const categorias = [
    { value: 1, label: "Pizza" },
    { value: 2, label: "Hamburger" },
    { value: 3, label: "Sorvete" },
  ];

  const criarEstabelecimento = async (data: FormEstabelecimentoProps) => {
    console.log(data.estabelecimento);
    if (!auth.token) return;
    const res = await fetch(process.env.NEXT_PUBLIC_URL_RESTAURANTE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.estabelecimento),
    });
    console.log(res);
    return true;
  };

  const handleFetchEndereco = useCallback(
    async (cep: string) => {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data) {
        setValue("estabelecimento.endereco.cidade", data.localidade);
        setValue("estabelecimento.endereco.logradouro", data.logradouro);
        setValue("estabelecimento.endereco.bairro", data.bairro);
        setValue("estabelecimento.endereco.estado", data.uf);
        setValue("estabelecimento.endereco.complemento", data.complemento);
        setValue("estabelecimento.endereco.pais", "Brasil");
      }
    },
    [setValue]
  );

  const cep = watch("estabelecimento.endereco.cep");
  const cnpj = watch("estabelecimento.cnpj");
  const fone = watch("estabelecimento.whatsapp");

  const formatCEP = (cep: string) => {
    const numericCep = cep.replace(/\D/g, "");

    if (numericCep.length === 8) {
      return `${numericCep.slice(0, 5)}-${numericCep.slice(5)}`;
    }

    return cep;
  };

  useEffect(() => {
    const formatFone = (fone: string) => {
      const numericFone = fone.replace(/[^\d]/g, "");
      if (numericFone.length >= 11) {
        return `(${numericFone.slice(0, 2)}) ${numericFone.slice(
          2,
          7
        )}-${numericFone.slice(7, 11)}`;
      }
      return fone;
    };

    const formatCNPJ = (cnpj: string) => {
      const numericCnpj = cnpj.replace(/[^\d]/g, "");
      if (numericCnpj.length >= 14) {
        return `${numericCnpj.slice(0, 2)}.${numericCnpj.slice(
          2,
          5
        )}.${numericCnpj.slice(5, 8)}/${numericCnpj.slice(
          8,
          12
        )}-${numericCnpj.slice(12, 14)}`;
      }
      return cnpj;
    };

    setValue("estabelecimento.endereco.cep", formatCEP(cep));
    setValue("estabelecimento.cnpj", formatCNPJ(cnpj));
    setValue("estabelecimento.whatsapp", formatFone(fone));

    if (cep.length != 9) return;
    handleFetchEndereco(cep);
  }, [handleFetchEndereco, setValue, cep, cnpj, fone]);

  const auth = useContext(AuthContext);

  const [estabelecimento, setEstabelencimento] =
    useState<IEstabelecimento | null>(null);
  const [listaEstabelecimento, setListaEstabelencimento] = useState<
    IEstabelecimento[] | null
  >([]);

  const listarEstabelecimento = useCallback(async () => {
    if (!auth.token) return;
    console.log(auth.token);
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
  }, [auth.token]);

  const listarEstabelecimentoPorId = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      console.log(auth.token);
      try {
        const response: IEstabelecimento | null = await fetch(
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

  const editarEstabelecimento = useCallback(
    async (data: IEstabelecimento) => {
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
        categoria: data.categoria,
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
    editarEstabelecimento,
    errors,
    register,
    criarEstabelecimento,
    handleSubmit,
    categorias,
  };
}
