import "./Order.css"
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
        <section className="order-page-body">
          <div className="order-page-btns">
            <button className="order-page-btn-active">pending</button>
            <button>order history</button>
          </div>
          <Order id={1}></Order>
          <Order id={2}></Order>
          <Order id={3}></Order>
          <Order id={4}></Order>
        </section>
        <footer>
          <BottomTabBar orderInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default OrderPage
