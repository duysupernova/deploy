import axios from "axios";

const backend_url = `${process.env.REACT_APP_BASE_PORT}/api/v1/user`;

export const createNewUser = (newUser) => axios.post(`${backend_url}/signup`, newUser)
export const loginUser = (formData) => axios.post(`${backend_url}/login`, formData)
export const likeThread = (token, thread_id) => axios.post(`${backend_url}/post/likeFunction/${thread_id}`, token, { headers: { Authorization: `Bearer ${token}` } })