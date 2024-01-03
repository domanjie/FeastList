import {
  CartActive,
  CartInActive,
  CreditCardIcon,
  OrdersIcon,
  RestaurantsIcon,
} from "../../icons"

const FoodCard = ({ avatar, price, name, restaurant, isInCart }) => {
  return (
    <section className="food-card">
      <img className="food-card-avatar" src={avatar} alt={name} />
      <div className="food-card-right-section">
        <p className="food-card-meal-name">{name}</p>
        <div className="display-flex">
          <div className="price-tag">${price}</div>
          <div className="food-card-right-section-btns ">
            {isInCart ? (
              <button className="cart-button">
                <CartActive />
              </button>
            ) : (
              <button className="cart-button">
                <CartInActive />
              </button>
            )}
            <button className="creditCard-btn">
              <CreditCardIcon />
            </button>
          </div>
        </div>
        <p className="food-card-restaurant-name">{restaurant}</p>
      </div>
    </section>
  )
}
export default FoodCard
