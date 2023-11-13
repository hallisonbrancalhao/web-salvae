import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { IPromocao } from "../base";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaFormPromocao } from "../base/schemas/promocao-schema";
import { FormPromocaoProps } from "../base/types/promocao.zod";

export default function usePromocao() {
  const [cupom, setCupom] =
  useState<IPromocao | null>(null);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormPromocao),
    defaultValues: {
      promocao: {
        id: 0,
        idEstabelecimento: 1,
        descricao: "",
        promocaoCategoria: [{
          idCategoriaPromocao: 1,
        }],
        promocaoDia: [{
          idDiaFuncionamento: 1,
        }],
        status: true,
      },
    },
  });

  const categorias = [
    { idCategoriaPromocao: 1, label: "Presencial" },
    { idCategoriaPromocao: 2, label: "Delivery" },
    { idCategoriaPromocao: 3, label: "TakeAway" },
  ];

  const diasFuncionamento = [
    { idDiaFuncionamento: 1, label: "Segunda-feira" },
    { idDiaFuncionamento: 2, label: "Terça-feira" },
    { idDiaFuncionamento: 3, label: "Quarta-feira" },
    { idDiaFuncionamento: 4, label: "Quinta-feira" },
    { idDiaFuncionamento: 5, label: "Sexta-feira" },
    { idDiaFuncionamento: 6, label: "Sábado" },
    { idDiaFuncionamento: 7, label: "Domingo" },
  ];

  const [successMessage, setSuccessMessage] = useState("");

  const auth = useContext(AuthContext);
  const [listaCupom, setListaCupom] = useState<IPromocao[]>([]);

  const handleRestauranteChange = (event: { target: { value: any } }) => {
    console.log(event.target.value);
    const restauranteId = event.target.value;
    setValue("promocao.idEstabelecimento", restauranteId);
  };

  const criarCupom = async (data: FormPromocaoProps) => {
    console.log('entrou!')
    console.log(data.promocao);
    if (!auth.token) return;
    const res = await fetch(process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/promocao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(data.promocao),
    });
    setSuccessMessage("Cadastro realizado com sucesso!");
    return true;
  };

  const editarCupom = async (data: FormPromocaoProps) => {
    console.log('entrou');
    if (!auth.token) return;
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH +
        "/promocao/" +
        data.promocao.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(data.promocao),
      }
    );
    console.log(res);
    setSuccessMessage("Edição realizada com sucesso!");
    return true;
  };

  const listarCupom = useCallback(async () => {
    if (!auth.token) return;
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/promocao", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    }).then((res) => res.json());
    if (response) {
      setListaCupom(response);
    }
  }, [auth.token]);

  const listarCupomPorId = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/promocao/" + id,
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
    },
    [auth.token]
  );

  const excluirCupom = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      await fetch(process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/promocao/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return true;
    },
    [auth.token]
  );

  useEffect(() => {
    listarCupom();
  }, [listarCupom]);

  return {
    cupom,
    handleSubmit,
    register,
    watch,
    setValue,
    errors,
    listaCupom,
    criarCupom,
    editarCupom,
    listarCupom,
    listarCupomPorId,
    excluirCupom,
    categorias,
    diasFuncionamento,
    handleRestauranteChange,
    successMessage,
  };
}
