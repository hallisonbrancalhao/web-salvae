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
    if (cnpj && senha) {
      try {
        const response = await auth.signIn({ cnpj, senha });
        console.log("handleLogin : response:", response);
        if (response) {
          push("/");
        }
      } catch (error) {
        setError("Usuário ou senha inválidos");
      }
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
