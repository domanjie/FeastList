import axios from "../api"
const LOGIN_URL = "/login"
const SIGNUP_URL = "/sign-up"

export const login = async (details) => {
  axios.post(LOGIN_URL, JSON.stringify(details), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
export const singUp = async (details) => {
  axios.post(SIGNUP_URL, JSON.stringify(details), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
