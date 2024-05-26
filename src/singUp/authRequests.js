import { axios_ } from "../api"

const LOGIN_URL = "/api/v1/authentication/login"
const SIGNUP_URL = "/api/v1/rle/client"

export const login = async (details) => {
  const response = await axios_.post(LOGIN_URL, JSON.stringify(details))

  return response
}
export const singUp = async (details) => {
  const response = await axios_.post(SIGNUP_URL, JSON.stringify(details))
  return response
}
