import { createContext, useContext, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./LocalStorageHook";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("NETTEE_TOKEN", null);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
    };

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        navigate('/login', { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};