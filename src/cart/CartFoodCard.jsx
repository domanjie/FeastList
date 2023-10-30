import { ChevronDown, ChevronUp, AdjustMentIcon, SaveMealIcon } from "../icons"
const CartFoodCard = ({ image, name, amount, userMade, price }) => {
  return (
    <section
      className={
        !userMade ? "cart-food-card" : "cart-food-card  editable-cart-food-card"
      }
    >
      {image && <img src={image} alt="" />}
      <div className="cart-food-card-div ">
        <div>
          <p>{name}</p>
          <p>{price}</p>
          <p>remove</p>
        </div>
        <div className="cart-food-card-div-secondChild">
          {userMade && (
            <button className="adjustment-button">
              <AdjustMentIcon />
            </button>
          )}
          <button className="saveMeal-button">
            <SaveMealIcon />
          </button>
        </div>

        <div className="amount-editor-div">
          <button className="chevronUp-button">
            <ChevronUp />
          </button>
          <p>{amount}</p>
          <button className="chevronDown-button">
            <ChevronDown />
          </button>
        </div>
      </div>
    </section>
  )
}
export default CartFoodCard
