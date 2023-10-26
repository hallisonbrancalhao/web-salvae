"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { AuthData } from "@/core/base/types/user";
import { LoginDto } from "@/core/base/dtos/login.dto";
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  singIn,
} from "@/services";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<AuthData | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const authData = getStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN);
    if (authData) {
      setUserData(JSON.parse(authData));
      setToken(userData?.access_token);
    }
    setLoading(false);
  }, [auth, userData?.access_token]);

  const signIn = async ({ cnpj, senha }: LoginDto) => {
    const response = await singIn(cnpj, senha);
    if (!response) return undefined;
    setUserData(response);
    setStorageItem(
      process.env.NEXT_PUBLIC_USER_TOKEN,
      JSON.stringify(response)
    );
    return response;
  };

  const signOut = async () => {
    setUserData(undefined);
    removeStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN);
  };

  const authContextValue = { userData, signIn, signOut, loading, token };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
