import { useEffect } from "react"
import { axios_ } from "../api"
import { useLocation, useNavigate } from "react-router-dom"
import useAuthContext from "./useAuthContext"

const CLIENT_ID =
  "348571079382-a0rf9alsfnhcbtoamc3m1ds31dj55ipp.apps.googleusercontent.com"

const useGoogleSSO = () => {
  const { setAuth } = useAuthContext()
  const location = useLocation()
  const from = location.state?.from
  const navigate = useNavigate()
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: CLIENT_ID,

      callback: (response) => {
        axios_
          .get(
            `/api/v1/authentication/oauth-login?id_token=${response.credential}`
          )
          .then((response) => {
            setAuth(response.data)
            from
              ? navigate(from, { replace: true })
              : navigate("/", { replace: true })
          })
      },
    })
  }, [])
}
export default useGoogleSSO
