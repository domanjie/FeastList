import "./BottomTabBar.css"
import { HomeIcon, VendorIcon, OrdersIcon, TrayInActive } from "../icons"
import { Link } from "react-router-dom"

const BottomTabBar = ({ homeInd, trayInd, vendorInd, orderInd }) => {
  return (
    <section className="bottom-tab-bar">
      <Link to={"/"}>
        <div className="bottom-tab-bar-div">
          <button className="bottom-tab-bar-button">
            <HomeIcon className={"filly"} />
          </button>
          <p className="bottom-tab-bar-button-name">Home</p>
          {homeInd && <div className="indicator"></div>}
        </div>
      </Link>

      <Link to={"/tray"}>
        <div className="bottom-tab-bar-div">
          <button className="bottom-tab-bar-button">
            <TrayInActive className={"filly"} />
          </button>
          <p className="bottom-tab-bar-button-name">Tray</p>
          {trayInd && <div className="indicator"></div>}
        </div>
      </Link>
      <Link to={"/vendors"}>
        <div className="bottom-tab-bar-div">
          <button className="bottom-tab-bar-button">
            <VendorIcon className={"filly"} />
          </button>
          <p className="bottom-tab-bar-button-name">Vendors</p>
          {vendorInd && <div className="indicator"></div>}
        </div>
      </Link>

      <Link to={"/orders"}>
        <div className="bottom-tab-bar-div">
          <button className="bottom-tab-bar-button">
            <OrdersIcon className={"stroky"} />
          </button>
          <p className="bottom-tab-bar-button-name">Orders</p>
          {orderInd && <div className="indicator"></div>}
        </div>
      </Link>
    </section>
  )
}
export default BottomTabBar
