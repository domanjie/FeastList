import { useNavigate } from "react-router-dom"
import { axios_ } from "../api"
import useAuthContext from "./useAuthContext"
export const useRefreshToken = () => {
  const { auth, setAuth } = useAuthContext()
  const navigate = useNavigate()
  const refreshTokens = async () => {
    try {
      const response = await axios_.get("/api/v1/authentication/refresh")
      setAuth(response.data)
      return response.data
    } catch (error) {
      const status = error?.response?.status
      if (status == 403 || 401 || 400) {
        console.log(status)
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
