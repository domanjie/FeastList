import "./Order.css"
import { HistoryIcon } from "../icons"
import Demarcation from "../demarcation/Demarcation"
import Order from "./Order"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import { Page } from "../page/Page"
const OrderPage = () => {
  return (
    <Page>
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
        <footer>
          <BottomTabBar orderInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default OrderPage
