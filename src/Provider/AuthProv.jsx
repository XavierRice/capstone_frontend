import React, { useContext, createContext, useState } from "react";
import axios from "axios";

export const AuthData = createContext();

export function useAuthDataProvider() {
  return useContext(AuthData);
}

function AuthProv({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const API = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  const isAuthenticated = user && token;

  return (
    <AuthData.Provider
      value={{ API, user, setUser, token, setToken, isAuthenticated }}
    >
      {children}
    </AuthData.Provider>
  );
}

export default AuthProv;
