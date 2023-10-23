import { useState } from "react"
import FoodButton from "./FoodButton"
import pizza from "../../../images/pizza.jpg"
import beans from "../../../images/beans.jpg"
import chicken from "../../../images/chicken.jpg"
import rice from "../../../images/rice.jpg"
import { PlusIcon, SearchIcon, CartInActive } from "../../../icons"
const FoodButtonSection = ({ FoodItemData }) => {
  const [selectedFoodData, setSelectedFoodItems] = useState([
    {
      key: 1,
      name: "pizza",
      avatar: pizza,
    },
    {
      key: 2,
      name: "Beans",
      avatar: beans,
    },
    {
      key: 3,
      name: "Chicken",
      avatar: chicken,
    },
    {
      key: 4,
      name: "Rice",
      avatar: rice,
    },
    {
      key: 5,
      name: "Pounded yam ",
      avatar: chicken,
    },
  ])
  const [unSelectedFoodData, setUnselectedFoodItems] = useState(FoodItemData)
  return (
    <section>
      {selectedFoodData && (
        <div className="selected-section">
          {selectedFoodData.map((item) => (
            <FoodButton key={item.key} {...item} />
          ))}
          <button className="cart-button">
            <CartInActive />
          </button>
        </div>
      )}

      <div className="unselected-section">
        {unSelectedFoodData.map((item) => (
          <FoodButton {...item} />
        ))}
      </div>

      <button className="search-button">
        <SearchIcon />
      </button>

      <button className="more-button">
        <PlusIcon />
      </button>
    </section>
  )
}
export default FoodButtonSection
