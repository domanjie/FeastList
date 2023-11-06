import AuthenticationContext from "../auth/AuthProvider"
import { useContext } from "react"
const useAuthContext = () => {
  const { auth, setAuth } = useContext(AuthenticationContext)
  return { auth, setAuth }
}
export default useAuthContext
