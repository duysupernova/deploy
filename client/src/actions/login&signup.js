import * as api from "../api/login&signup";

export const createNewUser = (newUser, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createNewUser(newUser);

        const action = { type: "CREATE", payload: data.data.user };
        dispatch(action);

        navigate('/login', { replace: true });
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(formData);

        const action = { type: "AUTH", payload: data };
        dispatch(action);

        navigate('/home', { replace: true });
    } catch (error) {
        console.log(error);
    }
}