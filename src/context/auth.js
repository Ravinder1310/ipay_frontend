import axios from "axios";
import { useState, useContext, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth({
                user: parsedData.user,
                token: parsedData.token
            });
        }
    }, []);

    // Set the default authorization header whenever the token changes
    useEffect(() => {
        if (auth.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [auth.token]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
