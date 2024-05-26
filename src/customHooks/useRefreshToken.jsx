import { axios_ } from "../api"
import useAuthContext from "./useAuthContext"

export const useRefreshToken = () => {
  const { auth, setAuth } = useAuthContext()

  const refreshTokens = async () => {
    const response = await axios_.get("/api/v1/authentication/refresh", {
      withCredentials: true,
    })
    setAuth(response.data)
    return response.data
  }
  return refreshTokens
}
export default useRefreshToken
