import axios from "axios";
import { useState, useContext, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Initialize auth state from localStorage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
      });
      console.log("Auth loaded from localStorage:", parsedData);
    }
  }, []); // Empty dependency array to run this only once after the initial render

  // Sync axios headers with token whenever auth changes
  useEffect(() => {
    if (auth?.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
      console.log("Token set in axios headers:", auth.token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [auth.token]); // Only rerun this effect when `auth.token` changes

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
