import { useState } from "react"
import { ChevronRight, CreditCardIcon } from "../infra/icons"
import InputBlock from "../singUp/InputBlock"
import { luhnCheck } from "../infra/LuhnCheck"
import { usePaymentDetailStore } from "../customHooks/store"
const PaymentDetail = () => {
  const [showForm, setShowForm] = useState(false)
  const { ccDetails, setCCDetails } = usePaymentDetailStore()
  const inputs = [
    {
      name: "ccNumber",
      type: "text",
      pText: "card-number",
      handleKeydown: ignoreNonDigits,
      handleChange: (e) => {
        let cursorStart = e.target.selectionStart
        let value = e.target.value.replace(/\D/g, "")
        e.target.value = formatCardNumber(value)
        if (value.length % 4 !== 1) {
          e.target.setSelectionRange(cursorStart, cursorStart)
        } else {
          e.target.setSelectionRange(cursorStart + 1, cursorStart + 1)
        }
      },
      maxLength: 19,
      validityChecker: validateCardNumber,
      err: "Invalid credit card number",
    },
    {
      name: "ccExpiration",
      type: "text",
      pText: "mm/yy",
      handleKeydown: (e) => {
        if (isNonDigit(e.key)) {
          e.preventDefault()
          return false
        } else if (e.key === "Backspace") {
          const value = e.target.value
          if (e.target.value.charAt(value.length - 1) == " ") {
            e.preventDefault()
            e.target.value = value.substring(0, value.length - 3)
          }
        }
      },

      handleChange: (e) => {
        if (e.target.value.length === 2) {
          e.target.value = e.target.value + " / "
        }
      },
      pattern: "^(0[1-9]|1[0-2])(\\s)(/)(\\s)([2-9][0-9])$",
      err: "Must be formatted MM/YY",
      maxLength: 7,
    },
    {
      name: "ccCVV",
      type: "text",
      pText: "cvv",
      handleKeydown: ignoreNonDigits,
      pattern: "^[0-9]{3,4}$",
      err: "Invalid CVV",
      maxLength: 3,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setCCDetails(Object.fromEntries(formData))
    setShowForm(false)
  }
  let ccNo = ccDetails?.ccNumber?.substring(
    ccDetails.ccNumber.length - 4,
    ccDetails.ccNumber.length
  )
  return (
    <div className="tsd-div">
      <RotChevronRight showForm={showForm}></RotChevronRight>
      <section className="tsd-div-section">
        <div
          onClick={() => {
            setShowForm(!showForm)
          }}
          className="tsd-div-section-div"
        >
          <CreditCardIcon />{" "}
          {ccNo ? (
            <div>
              <span>****</span> {ccNo}
            </div>
          ) : (
            "add payment details"
          )}
        </div>
        {showForm && (
          <form onSubmit={handleSubmit} className="tsd-div-section-form">
            <InputBlock {...inputs[0]} pText={"card-number"}></InputBlock>
            <div style={{ display: "flex", columnGap: "8px" }}>
              <InputBlock {...inputs[1]}></InputBlock>
              <InputBlock {...inputs[2]}></InputBlock>
            </div>
            <button type="submit" className="checkout-btn">
              SAVE
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
export default PaymentDetail

const ignoreNonDigits = (e) => {
  if (isNonDigit(e.key)) {
    e.preventDefault()
    return false
  }
}
const isNonDigit = (key) => {
  return !(/[0-9]/i.test(key) || specialKeys.has(key))
}
const validateCardNumber = (number) => {
  number = number.replace(/\D/g, "")
  const regex = new RegExp("^[0-9]{15,16}$")
  if (!regex.test(number)) return false
  return luhnCheck(number)
}
const formatCardNumber = (val) => {
  let returnVal = val.substring(0, 4)
  if (Math.floor(val.length / 4) === 0) {
    return returnVal
  } else {
    for (let index = 4; index + 4 <= val.length; index += 4) {
      returnVal = returnVal + " " + val.substring(index, index + 4)
    }
    if (val.length % 4 !== 0) {
      returnVal = returnVal + " " + val.substring(val.length - (val.length % 4))
    }
  }
  return returnVal
}
const specialKeys = new Set([
  "Enter",
  "Backspace",
  "Tab",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
])

export function RotChevronRight({ showForm }) {
  return (
    <ChevronRight
      style={{ transition: "all 0.3s ease-in-out" }}
      className={showForm && "rot-45"}
    />
  )
}
