import { CreditCardIcon } from "../icons"

const TraySummary = () => {
  return (
    <section className="tray-summary">
      <header className="tray-summary-header">
        <h3>Summary</h3>
      </header>

      <body className="tray-summary-body">
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
        <button className="checkout-btn">
          CHECK OUT
          <CreditCardIcon />
        </button>
      </footer>
    </section>
  )
}
export default TraySummary
