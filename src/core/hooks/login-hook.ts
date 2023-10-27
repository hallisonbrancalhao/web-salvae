import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const auth = useContext(AuthContext);

  const { push } = useRouter();
  const [cnpj, setCnpj] = useState("");
  const [senha, setSenha] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async () => {
    event?.preventDefault();
    if (cnpj && senha) {
      try {
        const response = await auth.signIn({ cnpj, senha });
        if (response?.access_token) push("/restaurantes");
        setError("Usuário ou senha inválidos");
      } catch (error) {
        setError("Usuário ou senha inválidos");
      }
    } else {
      setError("Preencha todos os campos");
    }
  };

  return {
    cnpj,
    senha,
    error,
    setCnpj,
    setError,
    setSenha,
    handleLogin,
  };
}
