import "./Order.css"
import { HistoryIcon } from "../icons"
import Demarcation from "../demarcation/Demarcation"
import Order from "./Order"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
const OrderPage = () => {
  return (
    <main className="order-page">
      <header className="header">
        <h2>Orders</h2>
      </header>
      <Order></Order>
      <Order></Order>
      <Demarcation />
      <div className="history-div">
        <button className="historyIcon-btn">
          <HistoryIcon />
        </button>
        <p>history</p>
      </div>
      <BottomTabBar orderInd={true}></BottomTabBar>
    </main>
  )
}
export default OrderPage
