import { Link, useLocation, useNavigate } from "react-router-dom"
import mailIcon from "./assets/mail.svg"
import passwordIcon from "./assets/password.svg"
import InputBlock from "./InputBlock"
import GoogleIcon from "./assets/Google.svg"
import axios from "../api"
import useAuthContext from "../customHooks/useAuthContext"
const LOGIN_URL = "/login"
const Login = () => {
  const { auth, setAuth } = useAuthContext()
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
    const response = await axios.post(
      "/api/v1/authentication/login",
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const accessToken = response.data
    setAuth(accessToken)
    console.log(auth)
    navigate(from, { replace: true })
  }

  return (
    <section id="login-form">
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((entry) => (
          <InputBlock {...entry} />
        ))}
        <span className="login-err-span">invalid username or password</span>
        <button type="submit" className="login-btn">
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
      <section id="or-block">
        <div className="h-line"></div>
        <p>OR</p>
        <div className="h-line"></div>
      </section>
      <div className="sso-block">
        <img src={GoogleIcon} alt="" />
        <p>Sign in with Google</p>
      </div>
      <p>Forgot password?</p>
    </section>
  )
}
export default Login
