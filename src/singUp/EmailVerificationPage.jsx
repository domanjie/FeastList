import { useEffect, useRef } from "react"
import "./styles.css"

const EmailVerification = () => {
  const inputRefArr = Array(6)
    .fill()
    .map(() => useRef())
  useEffect(() => {
    const inputs = inputRefArr.map((inputRef) => inputRef.current)
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
          inputs[i].value = ""
          if (i !== 0) inputs[i - 1].focus()
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== "") {
            return true
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key
            if (i !== inputs.length - 1) inputs[i + 1].focus()
            event.preventDefault()
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode)
            if (i !== inputs.length - 1) inputs[i + 1].focus()
            event.preventDefault()
          }
        }
      })
    }
  }, [])

  return (
    <section className="email-verification">
      <h2>Almost Done...</h2>
      <p className="email-verification-p1">
        We Sent Verification code to
        <strong> zendaya@gmail.com</strong>, please check inbox and enter code
        below.
      </p>
      <div>
        <input maxLength={1} type="text" ref={inputRefArr[0]} />
        <input maxLength={1} type="text" ref={inputRefArr[1]} />
        <input maxLength={1} type="text" ref={inputRefArr[2]} />
        <input maxLength={1} type="text" ref={inputRefArr[3]} />
        <input maxLength={1} type="text" ref={inputRefArr[4]} />
        <input maxLength={1} type="text" ref={inputRefArr[5]} />
      </div>
      <button className="submit-btn email-v-btn">verify</button>
      <p>
        didn’t recieve an email? <span className="s-l-link">resend</span>{" "}
      </p>
    </section>
  )
}
export default EmailVerification
