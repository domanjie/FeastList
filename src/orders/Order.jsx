import img1 from "../images/beans.jpg"
import img2 from "../images/chicken.jpg"
import img3 from "../images/meal2.jpg"
import img4 from "../images/meal1.jpg"
import { FilledChevron } from "../icons"
import ImageSlider from "./ImageSlider"
import { useRef, useState } from "react"
const Order = ({ id }) => {
  const images = [img1, img2, img3, img4]
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
    <div
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
      <div>
        <ul>
          <li className="bold-title">beans and rice</li>
          <li>
            Status : <span>pending</span>
          </li>
          <li>$150000</li>
          <li>12th feb . 4:30 pm</li>
        </ul>
        <h4 className="order-h4">
          view details
          <button>
            <FilledChevron />
          </button>
        </h4>
      </div>
    </div>
  )
}
export default Order
