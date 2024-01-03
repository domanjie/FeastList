import "./Cart.css"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import img1 from "../images/beans.jpg"
import img2 from "../images/meal1.jpg"
import img3 from "../images/meal3.jpg"
import CartFoodCard from "./CartFoodCard"
import FoodCard from "../home/foodCardSection/FoodCard"
import Modal from "../modal/Modal"
import AdjustMealSubPage from "../adjustMeal/AdjustMealSubPage"
import Demarcation from "../demarcation/Demarcation"
import Payment from "../payment/Payment"
const Cart = () => {
  const data = [
    {
      image: img1,
      name: "Beans With Plantain",
      restaurant: "Mama peppertual stores",
      amount: 1,
      price: 321.23,
    },
    {
      image: img2,
      name: "spiced up kpomo",
      restaurant: "Glystin kitchens",
      amount: 3,
      price: 36678.23,
    },
    {
      image: img3,
      name: "Goat Meat suya",
      restaurant: "mummy praise and co kitchens",
      amount: 1,
      price: 4678.23,
    },
    {
      name: "2 beef,4 kpomo,rice 2 portion, pepper-stew two portions,chicken",
      restaurant: "mama ebo pepper rice",
      amount: 1,
      price: 3241.33,
      userMade: true,
    },
  ]
  const data2 = [
    {
      avatar: img1,
      name: "Beans With Plantain",
      restaurant: "Mama peppertual stores",
      amount: 1,
      price: 321.23,
    },
    {
      avatar: img2,
      name: "spiced up kpomo",
      restaurant: "Glystin kitchens",
      amount: 3,
      price: 36678.23,
    },
    {
      avatar: img3,
      name: "Goat Meat suya",
      restaurant: "mummy praise and co kitchens",
      amount: 1,
      price: 4678.23,
    },
    {
      avatar: img3,
      name: "Goat Meat suya",
      restaurant: "mummy praise and co kitchens",
      amount: 1,
      price: 4678.23,
    },
    {
      avatar: img3,
      name: "Goat Meat suya",
      restaurant: "mummy praise and co kitchens",
      amount: 1,
      price: 4678.23,
    },
  ]
  return (
    <main id="cart">
      {/* <Modal>
        <AdjustMealSubPage />
        <Payment></Payment>
      </Modal> */}
      <header className="cart-header">
        <h2>Tray</h2>
        <button className="clear-cart-btn">CLEAR CART</button>
      </header>
      <Demarcation />
      <section className="cart-first-section">
        {data.map((item) => (
          <CartFoodCard {...item}></CartFoodCard>
        ))}

        <div className="cart-first-section-div">
          <button className="checkout-btn">Checkout</button>
          <div>
            <p>$5234</p>
            <Demarcation />
            <p>Total</p>
          </div>
        </div>
      </section>
      <h3>More</h3>
      <section className="cart-second-section">
        {data2.map((item) => (
          <FoodCard {...item} />
        ))}
      </section>
      <BottomTabBar indicatorState={[false, true, false, false]} />
    </main>
  )
}
export default Cart
