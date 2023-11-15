import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { IEstabelecimento } from "../base";
import { schemaFormEstabelecimento } from "@/core/base/schemas/estabelecimento-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormEstabelecimentoProps } from "../base/types/estabelecimento.zod";

export default function useEstabelecimento() {
  const [estabelecimento, setEstabelecimento] =
    useState<IEstabelecimento | null>(null);

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
        id: 0,
        nome: "",
        cnpj: "",
        senha: "",
        validasenha: "",
        instagram: "",
        whatsapp: "",
        fotoPerfil: null,
        fotoCapa: null,
        estabelecimentoCategoria: "",
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
  });

  const [categorias, setCategorias] = useState([]);
  const listarCategorias = useCallback(async () => {
    if (categorias.length) return;
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/estabelecimento/categorias",
      {
        method: "GET",
      }
    ).then((res) => res.json());
    setCategorias(response);
  }, [categorias]);

  const [successMessage, setSuccessMessage] = useState("");

  const handleFetchEndereco = useCallback(
    async (cep: string) => {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data) {
        setValue("estabelecimento.cidade", data.localidade);
        setValue("estabelecimento.logradouro", data.logradouro);
        setValue("estabelecimento.bairro", data.bairro);
        setValue("estabelecimento.estado", data.uf);
        setValue("estabelecimento.pais", "Brasil");
      }
    },
    [setValue]
  );

  const cep = watch("estabelecimento.cep");
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
    listarCategorias();

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

    setValue("estabelecimento.cep", formatCEP(cep));
    setValue("estabelecimento.cnpj", formatCNPJ(cnpj));
    setValue("estabelecimento.whatsapp", formatFone(fone));

    if (cep.length != 9) return;
    handleFetchEndereco(cep);
  }, [
    handleFetchEndereco,
    setValue,
    cep,
    cnpj,
    fone,
    listarCategorias,
    setCategorias,
  ]);

  const auth = useContext(AuthContext);

  const [listaEstabelecimento, setListaEstabelencimento] = useState<
    IEstabelecimento[]
  >([]);

  const listarEstabelecimento = useCallback(async () => {
    if (!auth.token) return;
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
    async (id: number) => {
      if (!auth.token) return;
      const response = await fetch(
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
        setEstabelecimento(response);
      }
    },
    [auth.token]
  );

  const criarEstabelecimento = async (data: FormEstabelecimentoProps) => {
    console.log(data);
    if (!auth.token) return;
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/estabelecimento",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(data.estabelecimento),
      }
    );
    setSuccessMessage("Cadastro realizado com sucesso!");
    return true;
  };

  const editarEstabelecimento = async (data: FormEstabelecimentoProps) => {
    console.log(data.estabelecimento);
    if (!auth.token) return;
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH +
        "/estabelecimento/" +
        data.estabelecimento.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(data.estabelecimento),
      }
    );
    console.log(res);
    setSuccessMessage("Edição realizada com sucesso!");
    return true;
  };

  const excluirEstabelecimento = useCallback(
    async (id: number) => {
      if (!auth.token) return;
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
    },
    [auth.token]
  );

  useEffect(() => {
    listarEstabelecimento();
  }, [listarEstabelecimento]);

  return {
    estabelecimento,
    setValue,
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
    successMessage,
  };
}
