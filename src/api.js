import axios from "axios"
const BASE_URL = "http://localhost:8080"
export const feastList_axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})
