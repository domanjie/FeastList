import "./BottomTabBar.css"
import { HomeIcon, CartInActive, RestaurantsIcon, OrdersIcon } from "../icons"

const BottomTabBar = () => {
  return (
    <section className="bottom-tab-bar">
      <button className="bottom-tab-bar-button">
        <HomeIcon />
      </button>
      <button className="bottom-tab-bar-button">
        <CartInActive />
      </button>
      <button className="bottom-tab-bar-button">
        <RestaurantsIcon />
      </button>
      <button className="bottom-tab-bar-button">
        <OrdersIcon />
      </button>
    </section>
  )
}
export default BottomTabBar
