import img1 from "../images/beans.jpg"
import img2 from "../images/chicken.jpg"
import img3 from "../images/meal2.jpg"
import img4 from "../images/meal1.jpg"
import { ChevronRight } from "../icons"
import ImageSlider from "./ImageSlider"
import { useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
const Order = ({ id }) => {
  const images = [img1, img2, img3, img4]
  useQuery()
  const [current, setCurrent] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const ref = useRef()
  const next = () => {
    setCurrent((current) => {
      if (current === images.length - 1) return 0
      return current + 1
    })
  }
  const handleMouseEnter = () => {
    clearInterval(intervalId)
    setIntervalId(setInterval(next, 2000))
    ref.current.querySelector(".image-slider-btns").style.visibility = "visible"
  }
  const handleMouseLeave = () => {
    clearInterval(intervalId)
  }
  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <section
        key={id}
        ref={ref}
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
            <li className="main-font-light">beans and rice</li>
            <li className="main-font-heavy">$150000</li>
            <li>12th feb . 4:30 pm</li>
            <li className="order-h4" onClick={handleClick}>
              <ChevronRight className={showDetails && "rot-45"}></ChevronRight>
              {showDetails ? "close details" : "view details"}
            </li>
          </ul>
        </div>
      </section>
      {showDetails && <OrderDetail></OrderDetail>}
    </>
  )
}
export default Order

const OrderDetail = () => {
  return (
    <div className="order-detail">
      <OrderDetailVendorGroup />
    </div>
  )
}
const OrderDetailVendorGroup = () => {
  return (
    <section style={{ padding: "0px 8px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
          <p style={{ fontWeight: "600", marginBottom: "5px" }}>
            Glystin Kitchens
          </p>
          .<span>delivery fee : $1500</span>
        </div>
        <p style={{ paddingBottom: "4px" }}>awaiting delivery </p>
      </div>
      <div style={{ padding: "0px 8px" }}>
        <OrderDetailItem></OrderDetailItem>
        <OrderDetailItem></OrderDetailItem>
      </div>
    </section>
  )
}
const OrderDetailItem = () => {
  return (
    <div className="order-detail-item">
      <img src={img4} alt="" />
      <div style={{ paddingLeft: "3px" }}>
        <div style={{ display: "flex", padding: "8px 0px" }}>
          <p className="order-detail-item-name">Spaghetti</p>
          <span>x1</span>
        </div>
        <p>$1500</p>
      </div>
    </div>
  )
}
