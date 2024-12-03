import { AuthContextValue, AuthData } from "@/types";
import { createContext, ReactNode, useState } from "react";

const key = "auth";

const getAuthStorage = () => {
  const authStorage = localStorage.getItem(key);

  if (authStorage) {
    return JSON.parse(authStorage) as AuthData;
  }

  return null;
};

const setAuthStorage = (data: AuthData) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeAuthStorage = () => localStorage.removeItem(key);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthData | null>(getAuthStorage);
  const isAuthenticated = !!auth;
  const user = auth?.user || null;
  const token = auth?.token || null;

  const logout = () => {
    setAuth(null);
    removeAuthStorage();
  };

  const login = (data: AuthData) => {
    setAuth(data);
    setAuthStorage(data);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
