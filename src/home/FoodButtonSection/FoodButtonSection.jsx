import { useEffect, useRef, useState } from "react"
import FoodButton from "./FoodButton"
import pizza from "../../images/pizza.jpg"
import beans from "../../images/beans.jpg"
import chicken from "../../images/chicken.jpg"
import rice from "../../images/rice.jpg"
import { PlusIcon, CartInActive, CreditCardIcon } from "../../icons"
const FoodButtonSection = ({ FoodItemData }) => {
  const SelectedFoodRef = useRef()
  const [unSelectedFoodData, setUnselectedFoodItems] = useState(FoodItemData)
  const [selectedFoodData, setSelectedFoodItems] = useState([
    {
      id: 1,
      name: "pizza",
      avatar: pizza,
    },
    {
      id: 2,
      name: "Beans",
      avatar: beans,
    },
    {
      id: 3,
      name: "Chicken",
      avatar: chicken,
    },
    {
      id: 4,
      name: "Rice",
      avatar: rice,
    },
    {
      id: 5,
      name: "Pounded yam ",
      avatar: chicken,
    },
  ])
  useEffect(() => {
    const selectedFoodWindow = SelectedFoodRef.current
    selectedFoodWindow.scrollTo({
      left: selectedFoodWindow.scrollWidth,
      behavior: "smooth",
    })
  })
  const addToSelected = (key) => {
    const result = unSelectedFoodData.filter((datum) => datum.id === key)
    setSelectedFoodItems([...selectedFoodData, ...result])
    setUnselectedFoodItems(
      unSelectedFoodData.filter((datum) => datum.id != key)
    )
  }
  const removeFromSelected = (key) => {
    const result = selectedFoodData.filter((datum) => datum.id === key)
    setUnselectedFoodItems([...unSelectedFoodData, ...result])
    setSelectedFoodItems(selectedFoodData.filter((datum) => datum.id != key))
  }
  return (
    <section>
      <div className="unselected-section">
        {unSelectedFoodData.map((item) => (
          <FoodButton {...item} handleClick={addToSelected} />
        ))}
      </div>
      <button className="more-button">
        <PlusIcon />
      </button>
      {selectedFoodData && (
        <div ref={SelectedFoodRef} className="selected-section">
          {selectedFoodData.map((item) => (
            <FoodButton {...item} handleClick={removeFromSelected} />
          ))}
          <button className="cart-button">
            <CartInActive />
          </button>
          <button className="creditCard-btn">
            <CreditCardIcon />
          </button>
        </div>
      )}
    </section>
  )
}
export default FoodButtonSection
