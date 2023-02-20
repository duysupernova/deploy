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
export const createTestData = (newTest) => async (dispatch) => {
  try {
    const { data } = await api.createTestData(newTest);

    const action = { type: "CREATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
