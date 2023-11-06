import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuthContext from "../customHooks/useAuthContext"

const AuthRequired = () => {
  const location = useLocation()
  const { auth } = useAuthContext()
  console.log(auth)
  return (
    <>
      {auth ? (
        <Outlet />
      ) : (
        <Navigate
          to={"/login"}
          state={{ from: location.pathname }}
          replace={true}
        />
      )}
    </>
  )
}
export default AuthRequired
