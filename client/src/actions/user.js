import * as api from "../api/user";

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

export const likeThread = (token, thread_id) => async (dispatch) => {
    try {
        const { data } = await api.likeThread(token, thread_id);

        const action = { type: "UPDATE_LIKE", payload: data };
        dispatch(action);

    } catch (error) {
        console.log(error);
    }
}