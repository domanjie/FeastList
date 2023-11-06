import axios from "../api"
const LOGIN_URL = "/api/v1/authentication/login"
const SIGNUP_URL = "/api/v1/rle/client"

export const login = async (details) => {
  const response = await axios.post(LOGIN_URL, JSON.stringify(details), {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.data
}
export const singUp = async (details) => {
  const response = await axios.post(SIGNUP_URL, JSON.stringify(details), {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.data
}
