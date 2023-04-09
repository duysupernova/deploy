import axios from "axios";

const backend_url = `${process.env.REACT_APP_BASE_PORT}/api/v1/user`;

export const createNewUser = (newUser) => axios.post(`${backend_url}/signup`, newUser)