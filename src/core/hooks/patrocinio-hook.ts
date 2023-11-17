import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { IPatrocinio } from "../base";
import { schemaFormPatrocinio } from "@/core/base/schemas/patrocinio-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormPatrocinioProps } from "../base/types/patrocinio.zod";

export default function usePatrocinio() {
  const [patrocinio, setPatrocinio] = useState<IPatrocinio | null>(null);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormPatrocinio),
    defaultValues: {
      patrocinio: {
        id: 0,
        nome: "",
        banner: "",
        status: false,
      },
    },
  });

  const handleImage = (data) => {
    const file = data.target.files[0];
    if (file.size > 64 * 1024) {
      alert("A imagem é muito grande. Selecione uma imagem menor.");
      return;
    } else if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setValue("patrocinio.banner", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const [successMessage, setSuccessMessage] = useState("");
  const auth = useContext(AuthContext);
  const [listaPatrocinadores, setListaPatrocinio] = useState <IPatrocinio[]> ([]);

  const listarPatrocinio = useCallback(async () => {
    if (!auth.token) return;
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/patrocinio",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      }
    ).then((res) => res.json());
    if (response) {
      setListaPatrocinio(response);
    }
  }, [auth.token]);

  const listarPatrocinioPorId = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/patrocinio" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      ).then((res) => res.json());
      if (response) {
        setPatrocinio(response);
      }
    },
    [auth.token]
  );

  const criarPatrocinio = async (data: FormPatrocinioProps) => {
    if (!auth.token) return;
    const res = await fetch(process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/patrocinio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(data.patrocinio),
    });
    setSuccessMessage("Cadastro realizado com sucesso!");
    return true;
  };

  const editarPatrocinio = async (data: FormPatrocinioProps) => {
    console.log(data.patrocinio);
    if (!auth.token) return;
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL_BASE_AUTH +
        "/patrocinio/" +
        data.patrocinio.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(data.patrocinio),
      }
    );
    console.log(res);
    setSuccessMessage("Edição realizada com sucesso!");
    return true;
  };

  const excluirPatrocinio = useCallback(
    async (id: string) => {
      if (!auth.token) return;
      await fetch(
        process.env.NEXT_PUBLIC_URL_BASE_AUTH + "/patrocinio/" + id,
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
    listarPatrocinio();
  }, [listarPatrocinio]);

  return {
    patrocinio,
    setValue,
    watch,
    listaPatrocinadores,
    listarPatrocinioPorId,
    listarPatrocinio,
    excluirPatrocinio,
    editarPatrocinio,
    errors,
    register,
    criarPatrocinio,
    handleSubmit,
    handleImage,
    successMessage,
  };
}
