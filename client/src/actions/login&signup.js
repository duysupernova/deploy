import * as api from "../api/login&signup";

export const createNewUser = (newUser, history) => async (dispatch) => {
    try {
        const { data } = await api.createNewUser(newUser);

        const action = { type: "CREATE", payload: data.data.user };
        dispatch(action);

        history("/login")
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(formData);

        const action = { type: "AUTH", payload: data };
        dispatch(action);
        history("/home");
    } catch (error) {
        console.log(error);
    }
}