import { useLocation, useNavigate } from "react-router-dom"
import { feastList_axios } from "../api"
import useAuthContext from "./useAuthContext"

export const useRefreshToken = () => {
  const { auth, setAuth } = useAuthContext()

  const refreshTokens = async () => {
    const response = await feastList_axios.get(
      "/api/v1/authentication/refresh",
      {
        withCredentials: true,
      }
    )
    setAuth(response.data)
    return response.data
  }
  return refreshTokens
}
export default useRefreshToken
