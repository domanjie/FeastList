import img1 from "../images/beans.jpg"
import img2 from "../images/chicken.jpg"
import img3 from "../images/meal2.jpg"
import img4 from "../images/meal1.jpg"
import { FilledChevron, ChevronRight } from "../icons"
import ImageSlider from "./ImageSlider"
import { useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
const Order = ({ id }) => {
  const images = [img1, img2, img3, img4]
  useQuery()
  const [current, setCurrent] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  const ref = useRef()
  const next = () => {
    setCurrent((current) => {
      if (current === images.length - 1) return 0
      return current + 1
    })
  }
  return (
    <>
      <section
        key={id}
        ref={ref}
        onMouseEnter={() => {
          clearInterval(intervalId)
          setIntervalId(setInterval(next, 2000))
          ref.current.querySelector(".image-slider-btns").style.visibility =
            "visible"
        }}
        onMouseLeave={() => {
          clearInterval(intervalId)
        }}
        className="order small-grey-font"
      >
        <ImageSlider
          setCurrent={setCurrent}
          images={images}
          current={current}
        ></ImageSlider>
        <div style={{ paddingLeft: "10px" }}>
          <ul>
            <li className="bold-title">beans and rice</li>
            <li>12th feb . 4:30 pm</li>
            <li>$150000</li>
            <li className="order-h4">
              <ChevronRight></ChevronRight> view details
            </li>
          </ul>
        </div>
      </section>
      <OrderDetail></OrderDetail>
    </>
  )
}
export default Order

const OrderDetail = () => {
  return (
    <>
      <div
        style={{
          fontSize: "var(--small-text)",
          marginLeft: "20px",
          padding: "5px 0px",
          borderLeft: "1px solid var(--primary--200)",
          color: "var(--sub-text)",
        }}
      >
        <OrderDetailVendorGroup />
      </div>
    </>
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
    <div style={{ padding: "6px 0px" }}>
      <img
        style={{
          height: "137px",
          width: "100%",
          borderRadius: "10px",
          objectPosition: "50% 50%",
          objectFit: "cover",
        }}
        src={img4}
        alt=""
      />
      <div style={{ paddingLeft: "3px" }}>
        <div style={{ display: "flex", padding: "8px 0px" }}>
          <p
            style={{ paddingRight: "10px", fontWeight: "500", color: "black" }}
          >
            Spaghetti
          </p>
          <span>x1</span>
        </div>
        <p>$1500</p>
      </div>
    </div>
  )
}
