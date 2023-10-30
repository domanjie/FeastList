import img1 from "../images/beans.jpg"
import { DetailIcon, GlobeIcon, LocationIcon, ChevronRight } from "../icons"

const Order = ({}) => {
  return (
    <div className="order">
      <img src={img1} alt="" />
      <ul>
        <li>beans and rice</li>
        <li>
          order-code: <span className="green-text">4124</span>
        </li>
        <li className="ico-li">
          <p>
            <span className="green-text">5 mins</span> to arrival
          </p>

          <button className="chevronRight-btn">
            <ChevronRight />
          </button>
        </li>
        <li className="ico-li">
          <p>
            runner: <span>domanjie ehinomen</span>
          </p>
          <button className="chevronRight-btn">
            <ChevronRight />
          </button>
        </li>
      </ul>
    </div>
  )
}
export default Order
