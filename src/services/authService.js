import axios from "axios"

const { REACT_APP_BACKEND_URL } = process.env


export const loginApi = async ({ email, password }) => {
    return await axios.post(`${REACT_APP_BACKEND_URL}/auth/login`, { email: email, password: password })
}