import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { ICupom } from "../base/types/cupom.iterface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaFormCupom } from "../base/schemas/cupom-schema";

export default function useCupom() {
  const [cupom, setCupom] =
  useState<ICupom | null>(null);

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
        codigo: "",
      },
    },
  });

  const [successMessage, setSuccessMessage] = useState("");
  const auth = useContext(AuthContext);

  const validarCupom = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      await fetch(process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/cupom/validar/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return true;
    },
    [auth.token]
  );

  return {
    cupom,
    handleSubmit,
    register,
    watch,
    setValue,
    errors,
    validarCupom,
    successMessage,
  };
}
