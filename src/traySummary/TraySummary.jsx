import "./TraySummary.css"
import { ChevronRight, LocationIcon, CreditCardIcon } from "../icons"
import InputBlock from "../singUp/InputBlock"
import { Children, useState } from "react"
import { Target } from "../icons"
const TraySummary = () => {
  const [addPayment, setAddPayment] = useState(false)
  const [addAddress, setAddAddress] = useState(false)
  return (
    <section className="tray-summary">
      <header className="tray-summary-header">
        <h3>Summary</h3>
      </header>
      <body className="tray-summary-body">
        <div className="tray-summary-row tray-summary-detail">
          <p>Delivery Address</p>
          <div className="tsd-div">
            <ChevronRight
              style={{ transition: "all 0.3s ease-in-out" }}
              className={addAddress && "rot-45"}
            />
            <section className="tsd-div-section">
              <div
                onClick={() => {
                  setAddPayment(false)
                  setAddAddress(!addAddress)
                }}
                className="tsd-div-section-div1"
              >
                <LocationIcon style={{ height: "20px" }} /> add address
              </div>
              {addAddress && (
                <div className="tsd-div-section-div2">
                  <InputBlock pText={"Address"}></InputBlock>
                  <button className="tsd-div-section-div2-button">
                    <Target />
                    use current location
                  </button>
                  <button className="checkout-btn"> SAVE </button>
                </div>
              )}
            </section>
          </div>
        </div>
        <div className="tray-summary-row tray-summary-detail">
          <p>Payment Details </p>
          <div className="tsd-div">
            <ChevronRight
              style={{ transition: "all 0.3s ease-in-out" }}
              className={addPayment && "rot-45"}
            />
            <section className="tsd-div-section">
              <div
                onClick={() => {
                  setAddAddress(false)
                  setAddPayment(!addPayment)
                }}
                className="tsd-div-section-div1"
              >
                <CreditCardIcon /> add payment details
              </div>
              {addPayment && (
                <div className="tsd-div-section-div2">
                  <InputBlock pText={"card-number"}></InputBlock>
                  <div style={{ display: "flex", columnGap: "72px" }}>
                    <InputBlock pText={"mm/yy"}></InputBlock>
                    <InputBlock pText={"cvv"}></InputBlock>
                  </div>
                  <button className="checkout-btn"> SAVE </button>
                </div>
              )}
            </section>
          </div>
        </div>
        <div className="tray-summary-row">
          <p>Total Item Fee :</p>
          <span>$1500</span>
        </div>
        <div className="tray-summary-row">
          <p>Delivery Fee :</p>
          <span>$500</span>
        </div>
      </body>

      <footer className="tray-summary-footer">
        <div className="tray-summary-row">
          <p>Total :</p>
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

const AddressDetail = () => {
  return (
    <div className="tray-summary-row tray-summary-detail">
      <p>Delivery Address</p>
      <div className="tsd-div">
        <ChevronRight />
        <section className="tsd-div-section">
          <div className="tsd-div-section-div1">
            <LocationIcon style={{ height: "20px" }} /> add address
          </div>
          <div className="tsd-div-section-div2">
            <InputBlock pText={"Address"}></InputBlock>
            <div>
              <LocationIcon style={{ height: "20px" }} />
              use current location
            </div>
            <button className="checkout-btn"> SAVE </button>
          </div>
        </section>
      </div>
    </div>
  )
}
const PaymentDetail = () => {
  return (
    <div className="tray-summary-row tray-summary-detail">
      <p>Payment Details </p>
      <div className="tsd-div">
        <ChevronRight />
        <section className="tsd-div-section">
          <div className="tsd-div-section-div1">
            <CreditCardIcon /> add payment details
          </div>
          <div className="tsd-div-section-div2">
            <InputBlock pText={"card-number"}></InputBlock>
            <div style={{ display: "flex", columnGap: "72px" }}>
              <InputBlock pText={"mm/yy"}></InputBlock>
              <InputBlock pText={"cvv"}></InputBlock>
            </div>
            <button className="checkout-btn"> SAVE </button>
          </div>
        </section>
      </div>
    </div>
  )
}
