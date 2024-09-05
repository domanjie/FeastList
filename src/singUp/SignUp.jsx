import "./styles.css"
import { Link, useNavigate } from "react-router-dom"
import InputBlock from "./InputBlock"
import {
  FemaleGenderIcon,
  MaleGenderIcon,
  EmailIcon,
  LockIcon,
} from "../infra/icons"
import { useState } from "react"
import EmailVerificationPage from "./EmailVerificationPage"
import { login, singUp } from "./authRequests.js"
import useAuthContext from "../customHooks/useAuthContext"

const SignUp = () => {
  const { setAuth } = useAuthContext()
  // const [displayEVP, setDisplayEVP] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    matNo: "",
  })
  const handleChange = (e) => {
    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const inputs = [
    {
      id: "email",
      name: "email",
      pText: "Email",
      type: "email",
      value: user.email,
      handleChange,
      err: "Must be a valid email",
      ico: <EmailIcon />,
    },
    {
      id: "mat-no",
      name: "matNo",
      pText: "Mat-Number",
      type: "text",
      value: user.matNo,
      handleChange,
    },
    {
      id: "password",
      name: "password",
      pText: "Password",
      type: "password",
      ico: <LockIcon />,
      err: "Minimum eight characters, at least one letter and one number:",
      pattern: "(?=.*[A-Za-z])(?=.*\\d).{8,}",
      value: user.password,
      handleChange,
    },
    {
      id: "password2",
      name: "confirmPassword",
      pText: "Confirm Password",
      type: "password",
      ico: <LockIcon />,
      err: "Passwords must match",
      pattern: user.password,
      value: user.confirmPassword,
      handleChange,
    },
  ]
  const genderInputs = [
    {
      className: " radio-form-block",
      id: "male",
      pText: "Male",
      type: "radio",
      ico: <MaleGenderIcon />,
      name: "gender",
      value: "MALE",
      handleChange,
    },
    {
      className: " radio-form-block",
      id: "female",
      pText: "Female",
      type: "radio",
      ico: <FemaleGenderIcon />,
      name: "gender",
      value: "FEMALE",
      handleChange,
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const signUpResponse = await singUp({
        userId: user.email,
        password: user.password,
        passwordConfirm: user.confirmPassword,
        gender: user.gender,
      })
      if (signUpResponse.status === 201) {
        console.log(signUpResponse.status)
        // setDisplayEVP(true)
        const loginResponse = await login({
          username: user.email,
          password: user.password,
        })
        setAuth(loginResponse.data)
        navigate("/", { replace: true })
      }
    } catch (error) {}
  }
  return (
    <>
      <section id="login-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((entry) => (
            <InputBlock {...entry} />
          ))}

          <section>
            <label htmlFor="radio" style={{ color: "var(--primary--300)" }}>
              Gender
            </label>
            <section id="radio">
              {genderInputs.map((entry) => (
                <InputBlock {...entry} />
              ))}
            </section>
          </section>
          <button type="submit" className="submit-btn sign-up-btn">
            Create account
          </button>
        </form>
        <p>
          Have an account ?
          <Link to={"/login"} className="s-l-link">
            login
          </Link>
        </p>
      </section>
      {/* {displayEVP && <EmailVerificationPage></EmailVerificationPage>} */}
    </>
  )
}
export default SignUp
