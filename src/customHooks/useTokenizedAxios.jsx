import { axios2 } from "../api"
import useAuthContext from "./useAuthContext"
import { useRefreshToken } from "./useRefreshToken"
import { useEffect } from "react"
import { refreshTokens } from "./useRefreshToken"
const useTokenizedAxios = () => {
  const {auth,setAuth}= useAuthContext()

  useEffect(() => {
    const requestInterceptor = axios2.interceptors.response.use((config) => {
        if(!config.headers["Authorization"]){
            config?.headers["Authorization"]=`Bearer ${auth}`
        }
        return config
    },(error)=>{Promise.reject(error)})
    const responseInterceptor = axios2.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true
          const accessToken =refreshTokens() 
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`
          return axios2(prevRequest)
        }
        return Promise.reject(error)
      }
    )
    return ()=>{
        axios2.interceptors.request.eject(requestInterceptor)
        axios2.interceptors.response.eject(responseInterceptor)
    }
  }, [auth])
  return axios2
}
export default useTokenizedAxios
