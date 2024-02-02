import { useEffect, useRef } from "react"
import "./styles.css"

const EmailVerification = () => {
  const inputRefArr = Array(6).fill(useRef())
  useEffect(() => {
    const inputs = inputRefArr.map((inputRefArr) => inputRefArr.current)
    console.log(inputs)
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function (event) {
        console.log("called added oo")
        // if (event.key === "Backspace") {
        //   inputs[i].value = ""
        //   if (i !== 0) inputs[i - 1].focus()
        // } else {
        //   if (i === inputs.length - 1 && inputs[i].value !== "") {
        //     return true
        //   } else if (event.keyCode > 47 && event.keyCode < 58) {
        //     inputs[i].value = event.key
        //     if (i !== inputs.length - 1) inputs[i + 1].focus()
        //     event.preventDefault()
        //   } else if (event.keyCode > 64 && event.keyCode < 91) {
        //     inputs[i].value = String.fromCharCode(event.keyCode)
        //     if (i !== inputs.length - 1) inputs[i + 1].focus()
        //     event.preventDefault()
        //   }
        // }
      })
    }
    console.log("done")
  }, [])

  return (
    <section className="email-verification">
      <p>
        We Sent Verification code to
        <span className="s-l-link">zendaya@gmail.com</span>, please check inbox
        and enter code below.
      </p>
      <div>
        <input maxLength={1} type="text" ref={inputRefArr[0]} />
        <input maxLength={1} type="text" ref={inputRefArr[1]} />
        <input maxLength={1} type="text" ref={inputRefArr[2]} />
        <input maxLength={1} type="text" ref={inputRefArr[3]} />
        <input maxLength={1} type="text" ref={inputRefArr[4]} />
        <input maxLength={1} type="text" ref={inputRefArr[5]} />
      </div>
      <p>
        didn’t recieve an email? <span className="s-l-link">resend</span>{" "}
      </p>
    </section>
  )
}
export default EmailVerification
