const SignUp = () => {
  return (
    <section id="login-form">
      <h1>Sign Up</h1>
      <form>
        <div className="form-block">
          <label htmlFor="email">
            <p>Email </p>
            <img src="src/assets/mail.svg"></img>
          </label>
          <input type="email" id="email" autoFocus />
        </div>
        <div className="form-block">
          <label htmlFor="mat-no">
            <p>Mat-Number</p>
            <img src="" alt="" />
          </label>
          <input type="text" id="mat-no" />
        </div>
        <div className="form-block">
          <label htmlFor="password">
            <p>Password</p>
            <img src="src\assets\password.svg" alt="" />
          </label>
          <input type="password" id="password" />
        </div>
        <div className="form-block">
          <label htmlFor="password">
            <p>Confirm Password</p>
            <img src="src\assets\password.svg" alt="" />
          </label>
          <input type="password" id="password" />
        </div>
        <label htmlFor="gender">
          Gender
          <img src="src\assets\gender.svg" alt="" />
        </label>
        <section id="gender">
          <div className="form-block gender-form-block">
            <label htmlFor="male">
              <p>Male</p>
              <img src="src\assets\maleGender.svg" alt="" />
            </label>
            <input type="radio" name="gender" id="male" />
          </div>
          <div className="form-block gender-form-block">
            <label htmlFor="female">
              <p>Female</p>
              <img src="src\assets\femaleGender.svg" alt="" />
            </label>
            <input type="radio" name="gender" id="female" />
          </div>
        </section>
        <button type="submit" className="login-btn sign-up-btn">
          Create account
        </button>
      </form>
      <p>
        Have an account ?
        <a href="youtube.com" className="s-l-link">
          login
        </a>
      </p>
    </section>
  )
}
export default SignUp
