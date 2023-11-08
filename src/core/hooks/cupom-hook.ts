import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { ICupom } from "../base";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaFormCupom } from "../base/schemas/cupom-schema";
import { FormCupomProps } from "../base/types/cupom.zod";

export default function useCupom() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormCupom),
    defaultValues: {
      cupom: {
        id: "",
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
  const [listaCupom, setListaCupom] = useState<ICupom[]>([]);

  const handleRestauranteChange = (event: { target: { value: any } }) => {
    console.log(event.target.value);
    const restauranteId = event.target.value;
    setValue("cupom.idEstabelecimento", restauranteId);
  };

  const criarCupom = async (data: FormCupomProps) => {
    console.log('entrou!')
    console.log(data.cupom);
    if (!auth.token) return;
    const res = await fetch(process.env.NEXT_PUBLIC_URL_CUPOM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(data.cupom),
    });
    setSuccessMessage("Cadastro realizado com sucesso!");
    return true;
  };

  const editarCupom = async (data: FormEstabelecimentoProps) => {
    console.log(data.estabelecimento);
    if (!auth.token) return;
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH +
        "/estabelecimento/" +
        data.estabelecimento.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(data.estabelecimento),
      }
    );
    console.log(res);
    setSuccessMessage("Edição realizada com sucesso!");
    return true;
  };

  const listarCupom = useCallback(async () => {
    if (!auth.token) return;
    const response = await fetch(process.env.NEXT_PUBLIC_URL_CUPOM, {
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
    handleSubmit,
    register,
    watch,
    setValue,
    errors,
    listaCupom,
    criarCupom,
    editarCupom,
    listarCupom,
    excluirCupom,
    categorias,
    diasFuncionamento,
    handleRestauranteChange,
    successMessage,
  };
}
