import "./styles.css"
import { Link } from "react-router-dom"
import mailIcon from "./assets/mail.svg"
import passwordIcon from "./assets/password.svg"
import maleGender from "./assets/maleGender.svg"
import femaleGender from "./assets/femaleGender.svg"
import InputBlock from "./InputBlock"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { singUp, login } from "./fuctions.js"

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    Gender: "",
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
      ico: mailIcon,
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
      ico: passwordIcon,
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
      ico: passwordIcon,
      err: "Passwords must match",
      pattern: user.password,
      value: user.confirmPassword,
      handleChange,
    },
  ]
  const genderInputs = [
    {
      className: "form-block radio-form-block",
      id: "male",
      pText: "Male",
      type: "radio",
      ico: maleGender,
      name: "gender",
      value: "MALE",
      handleChange,
    },
    {
      className: "form-block radio-form-block",
      id: "female",
      pText: "female",
      type: "radio",
      ico: femaleGender,
      name: "gender",
      value: "FEMALE",
      handleChange,
    },
  ]
  const postNewUser = useMutation({
    mutationFn: singUp,
  })
  const loginNewUser = useMutation({})
  const handleSubmit = (e) => {
    e.preventDefault()
    postNewUser.mutate({
      userId: user.email,
      password: user.password,
      passwordConfirm: user.confirmPassword,
      gender: user.Gender,
    })
    // if (postNewUser.isSuccess) {
    //   loginNewUser.mutate({ email: user.email, password: user.password })
    // }
  }
  return (
    <section id="login-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((entry) => (
          <InputBlock {...entry} />
        ))}
        <label htmlFor="radio">Gender</label>
        <section id="radio">
          {genderInputs.map((entry) => (
            <InputBlock {...entry} />
          ))}
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
  )
}
export default SignUp
