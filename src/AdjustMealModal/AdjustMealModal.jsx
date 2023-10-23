import "./AdjustMealModal.css"
import { ChevronUp, ChevronDown } from "../icons"
const AdjustMealModal = () => {
  return (
    <section className="payment-modal">
      <div>
        <h4>Closest Restaurants Serving Chosen Meal </h4>
        <ul>
          <li>Glystin Kitchens</li>
          <li>mama-perpetual foods</li>
          <li>victoria kitchens</li>
        </ul>
        <h4>Popular Restaurants Serving Chosen Meal</h4>
        <ul>
          <li>Gt foods</li>
          <li>Mat-ice</li>
          <li>Cream-2-Go</li>
          <li>Kilimanjaro</li>
        </ul>
        <h4> </h4>
      </div>
      {/* <h2></h2> 
      <div>
        <ul>
          <li>
            <div>
              <p>beans</p>
              <p>N100 per portion </p>
              <div className="amount-editor-div">
                <button className="chevronUp-button">
                  <ChevronUp />
                </button>
                <p>1</p>
                <button className="chevronDown-button">
                  <ChevronDown />
                </button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <p>White rice</p>
              <p>N100 per portion</p>
              <div className="amount-editor-div">
                <button className="chevronUp-button">
                  <ChevronUp />
                </button>
                <p>1</p>
                <button className="chevronDown-button">
                  <ChevronDown />
                </button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <p>White rice</p>
              <p>N100 per portion</p>
              <div className="amount-editor-div">
                <button className="chevronUp-button">
                  <ChevronUp />
                </button>
                <p>1</p>
                <button className="chevronDown-button">
                  <ChevronDown />
                </button>
              </div>
            </div>
          </li>
        </ul>
        <button className="login-btn">Order Now</button>
        <button className="login-btn">Add to Cart</button>
      </div> */}
    </section>
  )
}
export default AdjustMealModal
