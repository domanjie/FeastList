import axios from "axios"
export const BASE_URL = "http://172.20.10.5:8080"
export const axios_ = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})
