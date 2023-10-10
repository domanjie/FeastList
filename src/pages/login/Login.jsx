const Login = () => {
  return (
    <section id="login-form">
      <h1>Welcome Back</h1>
      <form>
        <div className="form-block">
          <label htmlFor="email">
            <p>Email </p>
            <img src="src/assets/mail.svg"></img>
          </label>
          <input type="email" id="email" autoFocus />
        </div>
        <div className="form-block">
          <label htmlFor="password">
            <p>Password</p>
            <img src="src\assets\password.svg" alt="" />
          </label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p>
        don't have an account ?
        <a href="youtube.com" className="s-l-link">
          sign up
        </a>
      </p>
      <section id="or-block">
        <div className="h-line"></div>
        <p>OR</p>
        <div className="h-line"></div>
      </section>
      <div className="sso-block">
        <img src="src\assets\Google.svg" alt="" />
        <p>Sign in with Google</p>
      </div>
      <p>Forgot password?</p>
    </section>
  )
}
export default Login
