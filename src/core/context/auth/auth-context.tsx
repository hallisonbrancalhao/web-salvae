"use client"
import { LoginDto } from "@/core/base/dtos/login.dto";
import { AuthData } from "@/core/base/types/user";
import { createContext } from "react";

export type AuthContextType = {
  userData: AuthData | undefined;
  signIn: ({ cnpj, senha }: LoginDto) => Promise<AuthData | undefined>;
  signOut: () => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);