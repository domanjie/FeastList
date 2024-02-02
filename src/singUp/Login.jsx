import { Link, useLocation, useNavigate } from "react-router-dom"
import mailIcon from "./assets/mail.svg"
import passwordIcon from "./assets/password.svg"
import InputBlock from "./InputBlock"
import { GoogleIcon } from "../icons"
import useAuthContext from "../customHooks/useAuthContext"
import { useState } from "react"
import { login } from "./authRequests"

const LOGIN_URL = "/api/v1/authentication/login"

const Login = () => {
  const { auth, setAuth } = useAuthContext()
  const [onForbidden, setForbidden] = useState(false)
  const location = useLocation()
  const from = location.state?.from
  const navigate = useNavigate()
  const inputs = [
    {
      id: "email",
      ico: mailIcon,
      name: "username",
      type: "text",
      pText: "Email",
    },
    {
      name: "password",
      id: "password",
      pText: "Password",
      type: "password",
      ico: passwordIcon,
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData)
    try {
      const response = await login(user)
      const accessToken = response.data
      setAuth(accessToken)
      from
        ? navigate(from, { replace: true })
        : navigate("/", { replace: true })
    } catch (error) {
      if (error.response.status == 403) setForbidden(true)
    }
  }

  return (
    <section id="login-form">
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((entry) => (
          <InputBlock key={entry.id} {...entry} />
        ))}
        {onForbidden && (
          <span className="login-err-span">invalid username or password</span>
        )}
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
      <p>
        don't have an account ?
        <Link to={"/sign-up"} className="s-l-link">
          sign up
        </Link>
        <a href="youtube.com"></a>
      </p>
      <OrBlock />
      <SsoBlock />
      <p>Forgot password?</p>
    </section>
  )
}
export default Login
const OrBlock = () => {
  return (
    <>
      <section id="or-block">
        <div className="h-line"></div>
        <p>OR</p>
        <div className="h-line"></div>
      </section>
    </>
  )
}
const SsoBlock = () => {
  return (
    <>
      <div className="sso-block">
        <GoogleIcon></GoogleIcon>
        <p>Sign in with Google</p>
      </div>
    </>
  )
}
