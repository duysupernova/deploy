import axios from "axios";

const backend_url = `${process.env.REACT_APP_BASE_PORT}/api/v1/thread`;

export const getAllThread = () => axios.get(`${backend_url}`)
