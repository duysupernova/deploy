import * as api from "../api/thread";

export const getAllThread = () => async (dispatch) => {
    try {
        const { data } = await api.getAllThread();
        const action = { type: "FETCH_ALL_THREAD", payload: data.data.threadData };
        dispatch(action);

    } catch (error) {
        console.log(error);
    }
};
export const createThread = (newThread, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createThread(newThread);
        const action = { type: "CREATE", payload: data.data.newThread };
        dispatch(action);

        navigate('/home', { require: true });

    } catch (error) {
        console.log(error);
    }
};

