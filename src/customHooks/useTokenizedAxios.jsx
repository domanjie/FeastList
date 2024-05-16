import { feastList_axios } from "../api"
import useAuthContext from "./useAuthContext"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
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
