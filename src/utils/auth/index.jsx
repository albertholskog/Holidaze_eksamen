import { createContext, useContext, useState } from "react";
import { useEffect } from "react";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkLocal = localStorage.getItem("accessToken")

  useEffect(() => {
    if (checkLocal) {
      setUser(true);
    }
  }, [user, checkLocal]);



  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
