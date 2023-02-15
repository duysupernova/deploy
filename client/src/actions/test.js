import * as api from "../api";

//Action creators : action return function
export const getTestData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTestData();

    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
