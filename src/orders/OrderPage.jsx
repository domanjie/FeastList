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
      <div className="order-page-btns">
        <button className="order-page-btn-active">pending</button>
        <button>order history</button>
      </div>
      <Order></Order>
      <Order></Order>
      <BottomTabBar orderInd={true}></BottomTabBar>
    </main>
  )
}
export default OrderPage
