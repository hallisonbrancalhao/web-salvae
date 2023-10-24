import React, { ReactNode, useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { authService } from '../services/auth-service';
import { AuthData } from '../../../base/types/user';

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, senha: string) => Promise<AuthData | undefined>;
  signOut: () => Promise<void>;
  loading: boolean; // Estado de carregamento
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authData, setAuth] = useState<AuthData | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  // Resgata os dados do usuário do localStorage
  const loadFromStorage = () => {
    const auth = localStorage.getItem('@AuthData');
    if (auth) {
      setAuth(JSON.parse(auth) as AuthData);
    }
    setLoading(false);
  };

  // Login
  const signIn = async (email: string, senha: string) => {
    try {
      const auth = await authService.signIn(email, senha);
      console.log('auth', auth);
      setAuth(auth);
      localStorage.setItem('@AuthData', JSON.stringify(auth));
      return auth;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  // Logout
  const signOut = async () => {
    setAuth(undefined);
    localStorage.removeItem('@AuthData');
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
