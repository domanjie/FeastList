import "./TraySummary.css"
import { ChevronRight, LocationIcon, CreditCardIcon } from "../infra/icons"
import InputBlock from "../singUp/InputBlock"
import { Children, useState } from "react"
import { Target } from "../infra/icons"
import { luhnCheck } from "../infra/LuhnCheck"

const TraySummary = ({ totalItemCost }) => {
  const [address, setAddress] = useState("")
  const [ccDetails, setCCDetails] = useState("")
  return (
    <section className="tray-summary">
      <header className="tray-summary-header">
        <h3>Summary</h3>
      </header>
      <body className="tray-summary-body">
        <div className="tray-summary-row tray-summary-detail">
          <p className="tray-summary-row-p">Delivery Address</p>
          <AddressDetail address={address}></AddressDetail>
        </div>
        <div className="tray-summary-row tray-summary-detail">
          <p className="tray-summary-row-p"> Payment Details </p>
          <PaymentDetail setCCDetails={setCCDetails} ccDetails={ccDetails} />
        </div>
        <div className="tray-summary-row">
          <p className="tray-summary-row-p">Total Item Fee :</p>
          <span>${totalItemCost}</span>
        </div>
        <div className="tray-summary-row">
          <p className="tray-summary-row-p">Delivery Fee :</p>
          <span>$500</span>
        </div>
      </body>

      <footer className="tray-summary-footer">
        <div className="tray-summary-row">
          <p className="tray-summary-row-p">Total :</p>
          <span>$1000</span>
        </div>
        <button style={{ marginTop: "12px" }} className="checkout-btn">
          CHECK OUT
        </button>
      </footer>
    </section>
  )
}
export default TraySummary

const AddressDetail = ({ setAddress, address }) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="tsd-div">
      <ChevronRight
        style={{ transition: "all 0.3s ease-in-out" }}
        className={showForm && "rot-45"}
      />
      <section className="tsd-div-section">
        <div
          onClick={() => {
            setShowForm(!showForm)
          }}
          className="tsd-div-section-div"
        >
          <LocationIcon style={{ height: "20px" }} />
          {address || "add address"}
        </div>
        {showForm && (
          <form className="tsd-div-section-form">
            <InputBlock pText={"Address"}></InputBlock>
            <button type="button" className="tsd-div-section-form-button">
              <Target />
              use current location
            </button>
            <button type="submit" className="checkout-btn">
              SAVE
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
const PaymentDetail = ({ setCCDetails, ccDetails }) => {
  const [showForm, setShowForm] = useState(false)
  const inputs = [
    {
      name: "cardNumber",
      type: "text",
      pText: "card-number",
      handleKeydown: ignoreNonDigits,
      handleChange: (e) => {
        let cursorStart = e.target.selectionStart
        console.log(cursorStart)
        e.target.value = formatCardNumber(e.target.value.replace(/\D/g, ""))
        if (e.target.value.charAt(e.target.value.length - 2) === " ") {
          e.target.setSelectionRange(cursorStart + 1, cursorStart + 1)
        } else {
          e.target.setSelectionRange(cursorStart, cursorStart)
        }
      },
      maxLength: 19,
      validityChecker: validateCardNumber,
      err: "Invalid credit card number",
    },
    {
      name: "mm/yy",
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
      name: "cvv",
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
  }
  return (
    <div className="tsd-div">
      <ChevronRight
        style={{ transition: "all 0.3s ease-in-out" }}
        className={showForm && "rot-45"}
      />
      <section className="tsd-div-section">
        <div
          onClick={() => {
            setShowForm(!showForm)
          }}
          className="tsd-div-section-div"
        >
          <CreditCardIcon />{" "}
          {ccDetails ? (
            <div>
              <span>****</span>{" "}
              {ccDetails?.cardNumber?.substring(
                ccDetails.cardNumber.length - 4,
                ccDetails.cardNumber.length
              )}
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
