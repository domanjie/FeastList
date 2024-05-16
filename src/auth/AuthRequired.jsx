import { Outlet, useLocation, useNavigate } from "react-router-dom"
import useAuthContext from "../customHooks/useAuthContext"
import useRefreshToken from "../customHooks/useRefreshToken"
const AuthRequired = () => {
  const { auth } = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()
  const refreshTokens = useRefreshToken()
  if (auth) {
    return (
      <>
        <Outlet></Outlet>
      </>
    )
  }
  refreshTokens().catch((error) => {
    const status = error?.response?.status
    if (status == 403 || 401 || 400) {
      navigate("/login", {
        replace: true,
        state: { from: location.pathname },
      })
    }
  })
}
export default AuthRequired
