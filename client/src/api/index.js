import axios from "axios";

const backend_url = 'http://localhost:4000/test';

export const fetchTestData = () => axios.get(`${backend_url}/get`);
export const createTestData = (newTest) =>
  axios.post(`${backend_url}/post`, newTest);
export const updateTestData = (id, updateTest) => axios.patch(`${backend_url}/${id}/update`, updateTest);
export const deleteTestData = (id) => axios.delete(`${backend_url}/${id}/delete`);