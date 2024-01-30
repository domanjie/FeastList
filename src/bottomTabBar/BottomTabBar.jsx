import "./BottomTabBar.css"
import { HomeIcon, CartInActive, RestaurantsIcon, OrdersIcon } from "../icons"
import { Link } from "react-router-dom"
import { useState } from "react"

const BottomTabBar = ({ homeInd, cartInd, vendorInd, orderInd }) => {
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
        {vendorInd && <div className="indicator"></div>}
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
