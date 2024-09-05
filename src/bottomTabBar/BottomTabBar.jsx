import "./BottomTabBar.css"
import { HomeIcon, VendorIcon, OrdersIcon, TrayInActive } from "../infra/icons"
import { Link } from "react-router-dom"

const BottomTabBar = ({ homeInd, trayInd, vendorInd, orderInd }) => {
  const tabs = [
    {
      linkTo: "/",
      tabIco: <HomeIcon className={"filly"} />,
      tabName: "Home",
      ind: homeInd,
    },
    {
      linkTo: "/tray",
      tabIco: <TrayInActive className={"filly"} />,
      tabName: "Tray",
      ind: trayInd,
    },
    {
      linkTo: "/vendors",
      tabIco: <VendorIcon className={"filly"} />,
      tabName: "Vendors",
      ind: vendorInd,
    },
    {
      linkTo: "/orders",
      tabIco: <OrdersIcon className={"stroky"} />,
      tabName: "Orders",
      ind: orderInd,
    },
  ]

  return (
    <section className="bottom-tab-bar">
      {tabs.map((tab) => (
        <BTBTab {...tab} />
      ))}
    </section>
  )
}
export default BottomTabBar

const BTBTab = ({ linkTo, tabIco, tabName, ind }) => {
  return (
    <Link to={linkTo}>
      <div className="BTBTab">
        <button className="BTBTab-button">{tabIco}</button>
        <p className="BTBTab-p">{tabName}</p>
        {ind && <div className="indicator"></div>}
      </div>
    </Link>
  )
}
