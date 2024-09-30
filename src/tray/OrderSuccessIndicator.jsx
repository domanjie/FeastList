import "./OrderSuccessIndicator.css"
import { create } from "zustand"
import { Cancel } from "../infra/icons"
import { Link } from "react-router-dom"
const OrderSuccessIndicator = () => {
  const { indicator, showIndicator } = OrderSuccessIndicatorStore()
  return (
    <div className={`order-success-indicator  ${indicator && "display"} `}>
      <div className="order-success-indicator-div">
        You have Successfully Placed You Order
        <div
          style={{
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            marginTop: "8px",
          }}
        ></div>
        <Link style={{ all: "unset" }} to={"/orders"}>
          <p className="order-success-indicator-span">view order</p>
        </Link>
      </div>
      <button onClick={() => showIndicator(false)}>
        <Cancel style={{ transform: "scale(1.3)" }}></Cancel>
      </button>
    </div>
  )
}
export default OrderSuccessIndicator

export const OrderSuccessIndicatorStore = create((set) => ({
  indicator: false,
  showIndicator: (bool) => {
    set({ indicator: bool })
  },
}))
