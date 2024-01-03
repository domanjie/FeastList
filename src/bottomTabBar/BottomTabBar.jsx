import "./BottomTabBar.css"
import { HomeIcon, CartInActive, RestaurantsIcon, OrdersIcon } from "../icons"
import { Link } from "react-router-dom"

const BottomTabBar = ({ indicatorState }) => {
  const [homeInd, cartInd, restInd, orderInd] = indicatorState
  return (
    <section className="bottom-tab-bar">
      <div>
        <button className="bottom-tab-bar-button">
          <Link to={"/"}>
            <HomeIcon />
          </Link>
        </button>
        {homeInd && <div className="indicator"></div>}
      </div>
      <div>
        <button className="bottom-tab-bar-button">
          <Link to={"/cart"}>
            <CartInActive />
          </Link>
        </button>
        {cartInd && <div className="indicator"></div>}
      </div>
      <div>
        <button className="bottom-tab-bar-button">
          <Link to={"/vendors"}>
            <RestaurantsIcon />
          </Link>
        </button>
        {restInd && <div className="indicator"></div>}
      </div>
      <div>
        <button className="bottom-tab-bar-button">
          <Link to={"/orders"}>
            <OrdersIcon />
          </Link>
        </button>
        {orderInd && <div className="indicator"></div>}
      </div>
    </section>
  )
}
export default BottomTabBar
