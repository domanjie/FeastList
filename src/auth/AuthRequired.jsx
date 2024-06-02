import { Outlet } from "react-router-dom"
import useRefreshToken from "../customHooks/useRefreshToken"
import useAuthContext from "../customHooks/useAuthContext"
const AuthRequired = () => {
  const { auth } = useAuthContext()
  const refreshTokens = useRefreshToken()
  if (auth) {
    return (
      <>
        <Outlet></Outlet>
      </>
    )
  }
  refreshTokens()
}
export default AuthRequired
