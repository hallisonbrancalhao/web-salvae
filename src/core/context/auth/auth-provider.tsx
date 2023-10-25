"use client"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { AuthData } from "@/core/base/types/user";
import { LoginDto } from "@/core/base/dtos/login.dto";
import { singIn } from "@/services";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<AuthData | undefined>(undefined);

  useEffect(() => {
    const validateToken = () => {
      const storageData = localStorage.getItem("@AuthData");
      if (storageData) {
        setUserData(JSON.parse(`${storageData}`) as AuthData);
      }
    };
    validateToken();
    setLoading(false);
  }, []);

  const signIn = async ({ cnpj, senha }: LoginDto) => {
    const response = await singIn(cnpj, senha);
    if (response == undefined) return undefined;
    setUserData(response);
    localStorage.setItem("@AuthData", JSON.stringify(response));
    return response;
  };

  const signOut = async () => {
    setUserData(undefined);
    localStorage.removeItem("@AuthData");
  };

  return (
    <AuthContext.Provider value={{ userData, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};