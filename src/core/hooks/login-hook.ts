import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const auth = useContext(AuthContext);

  const { push } = useRouter();
  const [cnpj, setCnpj] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    event?.preventDefault();
    if (cnpj && senha) {
      try {
        const response = await auth.signIn({ cnpj, senha });
        if (!response?.access_token) {
          return setError("Usuário ou senha inválidos");
        }
        if (response?.role === 1) return push("/restaurantes");
        return push("/validar-cupom");
      } catch (error) {
        return setError("Usuário ou senha inválidos");
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
