import { ChevronRight } from "../infra/icons"
import ImageSlider from "./ImageSlider"
import { useState } from "react"
const Order = ({ orderId, placedAt, orderVendorGroups }) => {
  const [current, setCurrent] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const datePlaced = new Date(placedAt)
  const orderName = orderVendorGroups
    .flatMap((vendorGroup) =>
      vendorGroup.orderItems.map((item) => item.itemName)
    )
    .join(", ")
  const price = orderVendorGroups
    .flatMap((vendorGroup) =>
      vendorGroup.orderItems.map((item) => item.quantity * item.price)
    )
    .reduce((acc, curr) => acc + curr, 0)

  const images = orderVendorGroups.flatMap((vendorGroup) =>
    vendorGroup.orderItems.map((item) => item.avatar_url)
  )
  const next = () => {
    setCurrent((current) => {
      if (current === images.length - 1) return 0
      return current + 1
    })
  }
  const handleMouseEnter = () => {
    clearInterval(intervalId)
    setIntervalId(setInterval(next, 2000))
  }
  const handleMouseLeave = () => {
    clearInterval(intervalId)
  }
  const isSingleMeal = () => {
    return (
      orderVendorGroups.length === 1 &&
      orderVendorGroups[0].orderItems.length === 1
    )
  }
  return (
    <div>
      <section
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="order sub-font"
      >
        <ImageSlider
          setCurrent={setCurrent}
          images={images}
          current={current}
        ></ImageSlider>
        <div className="order-div">
          <ul>
            <li className="main-font-light">
              {orderName}{" "}
              {isSingleMeal() && (
                <span className="sub-font">
                  {" "}
                  {"x" + orderVendorGroups[0].orderItems[0].quantity}
                </span>
              )}
            </li>
            <li className="main-font-heavy">{price}</li>
            <li>
              {datePlaced.getDate()}th{" "}
              {datePlaced.toLocaleString("default", { month: "short" })} . 4:30
              pm
            </li>

            {isSingleMeal() ? (
              <li>
                {orderVendorGroups[0].vendorName} . deliveryFee: $
                {orderVendorGroups[0].deliveryFee}
              </li>
            ) : (
              <li
                className="order-h4"
                onClick={() => {
                  setShowDetails(!showDetails)
                }}
              >
                <ChevronRight
                  className={showDetails && "rot-45"}
                ></ChevronRight>
                {showDetails ? "close details" : "view details"}
              </li>
            )}
          </ul>
        </div>
      </section>

      {showDetails && (
        <OrderDetail orderVendorGroups={orderVendorGroups}></OrderDetail>
      )}
    </div>
  )
}
export default Order

const OrderDetail = ({ orderVendorGroups }) => {
  return (
    <div className="order-detail">
      {orderVendorGroups.map((orderVendorGroup) => (
        <OrderVendorGroup {...orderVendorGroup} />
      ))}
    </div>
  )
}
const OrderVendorGroup = ({
  deliveryFee,
  orderStatus,
  vendorName,
  orderItems,
}) => {
  return (
    <section style={{ padding: "0px 8px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
          <p style={{ marginBottom: "5px" }}>{vendorName}</p>.
          <span>delivery fee : ${deliveryFee}</span>
        </div>
        <p style={{ paddingBottom: "4px" }}>{orderStatus} </p>
      </div>
      <div style={{ padding: "0px 8px" }}>
        {orderItems.map((item) => (
          <OrderDetailItem {...item}></OrderDetailItem>
        ))}
      </div>
    </section>
  )
}
const OrderDetailItem = ({ itemName, quantity, price, avatar_url }) => {
  return (
    <div className="order-detail-item">
      <img src={avatar_url} alt="" />
      <div style={{ paddingLeft: "3px" }}>
        <div style={{ display: "flex", padding: "8px 0px" }}>
          <p className="order-detail-item-name">{itemName}</p>
          <span>x{quantity}</span>
        </div>
        <p>${price}</p>
      </div>
    </div>
  )
}
