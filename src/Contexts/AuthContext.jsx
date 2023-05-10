import React, { createContext, useState, useContext, useEffect } from "react";
import decode from "jwt-decode";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = decode(token);
      setCurrentUser(user);
    }
  }, []);

  const login = (token) => {
    const user = decode(token);
    setCurrentUser(user);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
