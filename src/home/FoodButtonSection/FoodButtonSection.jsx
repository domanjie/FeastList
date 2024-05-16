import { useEffect, useRef, useState } from "react"
import FoodButton from "./FoodButton"
import { PlusIcon, CartInActive, CreditCardIcon } from "../../icons"
const FoodButtonSection = ({ FoodItemData }) => {
  const SelectedFoodRef = useRef()
  const [unSelectedFoodData, setUnselectedFoodItems] = useState(FoodItemData)
  const [selectedFoodData, setSelectedFoodItems] = useState([])
  useEffect(() => {
    if (SelectedFoodRef.current) {
      const selectedFoodWindow = SelectedFoodRef.current
      selectedFoodWindow.scrollTo({
        left: selectedFoodWindow.scrollWidth,
        behavior: "smooth",
      })
    }
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
      {selectedFoodData.length ? (
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
      ) : (
        ""
      )}
    </section>
  )
}
export default FoodButtonSection
