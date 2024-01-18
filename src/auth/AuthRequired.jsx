import { Outlet } from "react-router-dom"
import useAuthContext from "../customHooks/useAuthContext"
import RefreshToken from "./RefreshToken"
const AuthRequired = () => {
  const { auth } = useAuthContext()
  console.log(auth)
  return <>{auth ? <Outlet /> : <RefreshToken />}</>
}
export default AuthRequired
