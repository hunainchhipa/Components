import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userPermissions, setUserPermissions] = useState(["read", "write"]);

  const login = (permissions) => {
    setUserPermissions(permissions);
  };

  const logout = () => {
    setUserPermissions([]);
  };

  return (
    <AuthContext.Provider value={{ userPermissions, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
