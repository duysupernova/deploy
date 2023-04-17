// import * as api from "../api";

// //Action creators : action return function
// export const getTestData = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchTestData();


//     const action = { type: "FETCH_ALL", payload: data.data.testData };
//     dispatch(action);
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const createTestData = (newTest) => async (dispatch) => {
//   try {

//     const { data } = await api.createTestData(newTest);

//     const action = { type: "CREATE", payload: data.data.newData };
//     dispatch(action);

//   } catch (error) {
//     console.log(error);
//   }
// };
// export const updateTestData = (id, updateTest) => async (dispatch) => {
//   try {
//     const { data } = await api.updateTestData(id, updateTest);
//     const action = { type: "UPDATE", payload: data.data.testData };
//     dispatch(action);
//   } catch (error) {
//     console.log(error);
//   }
// }
// export const deleteTestData = (id) => async (dispatch) => {
//   try {
//     await api.deleteTestData(id)

//     const action = { type: "DELETE", payload: id };
//     dispatch(action);
//   } catch (error) {
//     console.log(error);
//   }
// }
