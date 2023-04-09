import * as api from "../api/login&signup";

export const createNewUser = (newUser) => async (dispatch) => {
    try {
        console.log("data is ");
        const { data } = await api.createNewUser(newUser);


        const action = { type: "CREATE", payload: data.data.user };
        dispatch(action);

    } catch (error) {
        console.log(error.response);
    }
};