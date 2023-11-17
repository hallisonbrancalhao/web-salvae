import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { ICupom } from "../base/types/cupom.iterface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaFormCupom } from "../base/schemas/cupom-schema";

export default function useCupom() {
  const [cupom, setCupom] = useState<ICupom | null>(null);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormCupom),
    defaultValues: {
      cupom: {
        codigo: "",
      },
    },
  });

  const [successMessage, setSuccessMessage] = useState("");
  const auth = useContext(AuthContext);
  const [promocaId, setPromocaId] = useState<string | null>(null);

  const listarIdPromocao = async (id: string) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/promocao/estabelecimento/" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      }
    ).then((res) => res.json());
    if (response[0]) {
      setPromocaId(response[0].id);
    }
  };

  const validarCupom = async (id: string, codigo: string) => {
    console.log(id, codigo);
    await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/cupom/validar/" + id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({ codigo: codigo }),
      }
    );
    setSuccessMessage("Cupom validado com sucesso!");
    return setSuccessMessage;
  };

  return {
    cupom,
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    errors,
    validarCupom,
    listarIdPromocao,
    promocaId,
    successMessage,
  };
}
