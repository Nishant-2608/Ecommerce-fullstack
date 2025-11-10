// src/services/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import AuthenticationService from "../components/AuthenticationComponent/authenticationService";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(AuthenticationService.getLoggedInUser());
  const [token, setToken] = useState(AuthenticationService.getToken());

  useEffect(() => {
    setUser(AuthenticationService.getLoggedInUser());
    setToken(AuthenticationService.getToken());
  }, []);

  const login = (username, token) => {
    AuthenticationService.registerSuccessLogin(username, token);
    setUser(username);
    setToken(token);
  };

  const logout = () => {
    AuthenticationService.logout();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
