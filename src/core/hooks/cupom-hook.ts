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
        restaurante: "",
        nome: "",
        sobre: "",
        foto: "",
        categoria:[],
        dias: [],
        status: true,
      },
    },
  });

  const handleImage = (data) => {
    const file = data.target.files[0];
    if (file.size > 64 * 1024) {
      alert('A imagem é muito grande. Selecione uma imagem menor.');
      return;
    }
    else if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setValue('cupom.foto', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const categorias = [
    { value: "Presencial" },
    { value: "Delivery" },
    { value: "TakeAway" },
  ];

  const diasFuncionamento = [
    { value: 1, label: "Segunda-feira" },
    { value: 2, label: "Terça-feira" },
    { value: 3, label: "Quarta-feira" },
    { value: 4, label: "Quinta-feira" },
    { value: 5, label: "Sexta-feira" },
    { value: 6, label: "Sábado" },
    { value: 7, label: "Domingo" },
  ];

  const auth = useContext(AuthContext);
  const [cupom, setCupom] = useState<ICupom[]>([]);

  const handleRestauranteChange = (event: { target: { value: any; }; }) => {
      console.log(event.target.value)
      const restauranteId = event.target.value;
      setValue('cupom.restaurante', restauranteId);
  };

  const criarCupom = async (data: FormCupomProps) => {
    console.log(data.cupom);
    if (!auth.token) return;
    const res = await fetch(process.env.NEXT_PUBLIC_URL_CUPOM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.cupom),
    });
    console.log(res);
    return true;
  };

  const listaCupom = useCallback(async () => {
    if (!auth.token) return;
    try {
      console.log("auth.token", auth.token);
      const response = await fetch(process.env.NEXT_PUBLIC_URL_CUPOM, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      }).then((res) => res.json());
      if (response) {
        setCupom(response);
      }
    } catch (error) {
      //console.log(error);
    }
  }, [auth.token]);

  const excluirCupom = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      try {
        await fetch(process.env.NEXT_PUBLIC_URL_CUPOM + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        });
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
    handleSubmit,
    register,
    watch,
    setValue,
    errors,
    cupom,
    criarCupom,
    listaCupom,
    excluirCupom,
    categorias,
    diasFuncionamento,
    handleImage,
    handleRestauranteChange,
  };
}
