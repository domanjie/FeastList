import { useLocation,useNavigate } from "react-router-dom"
import axios from "../api"
import useAuthContext from "./useAuthContext"
export const refreshTokens = async () => {
  const { auth, setAuth } = useAuthContext()
  const location=useLocation()
  const navigate=useNavigate()
  try {
    const response = await axios.get("/api/v1/authentication//refresh", {
      withCredentials: true,
    })
    setAuth(response.data)
    return response.data
  } catch (error) {
    if(error?.response?.status=403)
    {
      navigate("/login",{replace:true,state:{from:location.pathname}})
    }
  }
}
