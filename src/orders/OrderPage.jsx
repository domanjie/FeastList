import "./Order.css"
import { HistoryIcon } from "../icons"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import Demarcation from "../demarcation/Demarcation"
import Order from "./Order"
const OrderPage = () => {
  return (
    <main className="order-page">
      <header className="header">
        <h2>Orders</h2>
      </header>
      <Demarcation />
      <Order></Order>
      <Order></Order>
      <Demarcation />
      <div className="history-div">
        <button className="historyIcon-btn">
          <HistoryIcon />
        </button>
        <p>history</p>
      </div>

      <BottomTabBar />
    </main>
  )
}
export default OrderPage
