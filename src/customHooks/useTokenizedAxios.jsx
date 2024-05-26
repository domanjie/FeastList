import axios from "axios"
import useAuthContext from "./useAuthContext"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

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
        console.log(prevRequest?.sent)
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true
          refreshTokens()
            .then((accessToken) => {
              prevRequest.headers["Authorization"] = `Bearer ${accessToken}`
              return feastList_axios(prevRequest)
            })
            .catch((error) => {
              console.log("eerroeor")
              const status = error?.response?.status
              if (status == 403) {
                navigate("/login", {
                  replace: true,
                  state: { from: location.pathname },
                })
              }
            })
        }
        return Promise.reject(error)
      }
    )
    return () => {
      feastList_axios.interceptors.request.eject(requestInterceptor)
      feastList_axios.interceptors.response.eject(responseInterceptor)
    }
  }, [auth])
  return feastList_axios
}
export default useTokenizedAxios
