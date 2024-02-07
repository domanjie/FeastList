import { useEffect, useRef } from "react"
import "./styles.css"
import SeparatedInput from "./SeparatedInput"
const EmailVerification = () => {
  const inputRefArr = Array(6)
    .fill()
    .map(() => useRef())

  return (
    <section className="email-verification">
      <h2>Almost Done...</h2>
      <p className="email-verification-p1">
        We Sent Verification code to
        <strong> zendaya@gmail.com</strong>, please check inbox and enter code
        below.
      </p>
      <form>
        <SeparatedInput inputRefArr={inputRefArr} />
      </form>
      <button className="submit-btn email-v-btn">verify</button>
      <p>
        didn’t recieve an email? <span className="s-l-link">resend</span>{" "}
      </p>
    </section>
  )
}
export default EmailVerification
