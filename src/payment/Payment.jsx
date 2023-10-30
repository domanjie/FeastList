import "./Payment.css"
import { ChevronRight, XIcon } from "../icons"
import SubPage from "../subpage/SubPage"
const Payment = () => {
  return (
    <SubPage>
      <h3>summary</h3>
      <ul className="payment-ul">
        <li>
          <p>meal</p>
          <p>view meal</p>
        </li>
        <li>
          <p>Amount</p>
          <p>N1000</p>
        </li>
        <li>
          <p>coupon code</p>
          <p>add code</p>
        </li>
        <li>
          <p>Address</p>
          <button className="chevronRight-btn">
            <ChevronRight />
          </button>
        </li>
        <li>
          <p>Payment Method</p>
          <button className="chevronRight-btn">
            <ChevronRight />
          </button>
        </li>
        <li>
          <p>Credit Card Details</p>
          <button className="chevronRight-btn">
            <ChevronRight />
          </button>
        </li>
      </ul>
      {/* <div className="form-block">
          <label htmlFor="address-input">Address</label>
          <input type="text" id="address-input" />
        </div>

        <div className="form-block">
          <label htmlFor="credit-card-input">credit card number</label>
          <input type="text" id="credit-card-input" />
        </div> */}

      <button className="login-btn">pay $400</button>
    </SubPage>
  )
}
export default Payment
