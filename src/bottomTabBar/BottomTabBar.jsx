import "./BottomTabBar.css"
import { HomeIcon, CartInActive, RestaurantsIcon, OrdersIcon } from "../icons"
import { Link } from "react-router-dom"

const BottomTabBar = () => {
  return (
    <section className="bottom-tab-bar">
      <button className="bottom-tab-bar-button">
        <Link to={"/"}>
          <HomeIcon />
        </Link>
      </button>
      <button className="bottom-tab-bar-button">
        <Link to={"/cart"}>
          <CartInActive />
        </Link>
      </button>
      <button className="bottom-tab-bar-button">
        <Link to={"/restaurants"}>
          <RestaurantsIcon />
        </Link>
      </button>
      <button className="bottom-tab-bar-button">
        <Link to={"/orders"}>
          <OrdersIcon />
        </Link>
      </button>
    </section>
  )
}
export default BottomTabBar
