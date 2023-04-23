import * as api from "../api/thread";

export const getAllThread = () => async (dispatch) => {
    try {
        const { data } = await api.getAllThread();
        const action = { type: "FETCH_ALL", payload: data.data.threadData };
        dispatch(action);

    } catch (error) {
        console.log(error);
    }
};

