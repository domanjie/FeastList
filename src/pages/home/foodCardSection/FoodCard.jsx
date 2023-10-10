import {
  CartActive,
  CartInActive,
  OrdersIcon,
  RestaurantsIcon,
} from "../../../icons"

const FoodCard = ({ avatar, price, name, restaurant, isInCart }) => {
  return (
    <section className="food-card">
      <div className="food-card-left-section">
        <img className="food-card-avatar" src={avatar} alt={name}></img>
        <div className="price-tag">
          <div></div>${price}
        </div>
      </div>
      <div className="food-card-right-section">
        <p className="food-card-meal-name">{name}</p>
        <p className="food-card-restaurant-name">{restaurant}</p>
        {isInCart ? (
          <button className="cart-button">
            <CartActive />
          </button>
        ) : (
          <button className="cart-button">
            <CartInActive />
          </button>
        )}
      </div>
    </section>
  )
}
export default FoodCard
