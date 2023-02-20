import axios from "axios";

const backend_url = 'http://localhost:4000/test';

export const fetchTestData = () => axios.get(`${backend_url}/get`);
export const createTestData = (newTest) =>
  axios.post(`${backend_url}/post`, newTest);
