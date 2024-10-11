import "./Order.css"
import Order from "./Order"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import { Page } from "../page/Page"
import { useQuery } from "@tanstack/react-query"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
const OrderPage = () => {
  const axios = useTokenizedAxios()
  const orderQuery = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios.get("api/v1/orders")
      console.log(response.data)
      return response.data
    },
  })
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
          {orderQuery.data?.map((order) => (
            <Order key={order.orderId} {...order}></Order>
          ))}
        </section>
        <footer>
          <BottomTabBar orderInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default OrderPage
