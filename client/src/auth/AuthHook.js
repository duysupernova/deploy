import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./LocalStorageHook";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/user";
import Swal from 'sweetalert2';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("NETTEE_TOKEN", localStorage.getItem("NETTEE_TOKEN"));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        dispatch(loginUser(data, navigate)).then(function (result) {
            if (!result) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Email or Password !',
                })
            }
        });;
    };

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