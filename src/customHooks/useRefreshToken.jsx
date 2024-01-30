import { useLocation, useNavigate } from "react-router-dom"
import { feastList_axios } from "../api"
import useAuthContext from "./useAuthContext"

export const useRefreshToken = () => {
  const { auth, setAuth } = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()
  const refreshTokens = async () => {
    try {
      const response = await feastList_axios.get(
        "/api/v1/authentication/refresh",
        {
          withCredentials: true,
        }
      )
      await setAuth(response.data)
      return response.data
    } catch (error) {
      if (error?.response?.status == 403) {
        navigate("/login", {
          replace: true,
          state: { from: location.pathname },
        })
      }
    }
  }
  return refreshTokens
}
export default useRefreshToken
