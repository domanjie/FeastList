import "./TraySummary.css"
import SubPage from "../subpage/SubPage"
import { CreditCardIcon } from "../icons"
const TraySummaryM = () => {
  return (
    <SubPage>
      <h3 style={{ padding: "20px 0px" }}>Summary</h3>
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
    </SubPage>
  )
}
export default TraySummaryM
