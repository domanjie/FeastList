import "./PaymentModal.css"
const PaymentModal = () => {
  return (
    <section className="payment-modal">
      <div>
        <h3> summary</h3>
        <ul>
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
        </ul>
        <div className="form-block">
          <label htmlFor="address-input">Address</label>
          <input type="text" id="address-input" />
        </div>

        <div className="form-block">
          <label htmlFor="credit-card-input">credit card number</label>
          <input type="text" id="credit-card-input" />
        </div>

        <button className="login-btn">pay $400</button>
      </div>
    </section>
  )
}
export default PaymentModal
