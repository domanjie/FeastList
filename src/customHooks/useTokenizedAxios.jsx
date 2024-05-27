import axios from "axios"
import useAuthContext from "./useAuthContext"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
const BASE_URL = "http://localhost:8080"
const feastList_axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})
const useTokenizedAxios = () => {
  const { auth } = useAuthContext()
  const refreshTokens = useRefreshToken()
  useEffect(() => {
    const requestInterceptor = feastList_axios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth}`
        }
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
    const responseInterceptor = feastList_axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true
          const accessToken = await refreshTokens()
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`
          return feastList_axios(prevRequest)
        }
        return Promise.reject(error)
      }
    )
    return () => {
      feastList_axios.interceptors.request.eject(requestInterceptor)
      feastList_axios.interceptors.response.eject(responseInterceptor)
    }
  }, [])
  return feastList_axios
}
export default useTokenizedAxios
