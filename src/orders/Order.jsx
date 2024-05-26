import img1 from "../images/beans.jpg"
import { DetailIcon, GlobeIcon, LocationIcon, ChevronRight } from "../icons"

const Order = ({}) => {
  return (
    <div className="order">
      <img src={img1} alt="" />
      <div>
        <ul>
          <li className="order-name">beans and rice</li>
          <li>
            Status : <span>pending</span>
          </li>
          <li>$150000</li>
          <li>12th feb . 4:30 pm</li>
        </ul>
        <h4>view details</h4>
      </div>
    </div>
  )
}
export default Order
