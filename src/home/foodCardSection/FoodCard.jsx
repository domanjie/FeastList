import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { CreditCardIcon, TrayActive, TrayInActive } from "../../icons"
import useTokenizedAxios from "../../customHooks/useTokenizedAxios"

const FoodCard = ({
  avatar_url,
  price,
  meal_name,
  vendor_name,
  isInCart,
  id,
}) => {
  const [active, setActive] = useState(false)
  const axios = useTokenizedAxios()
  const addToTray = useMutation({
    mutationFn: async (data) => {
      axios.post("api/v1/tray", data)
    },
  })
  const removeFromTray = useMutation({
    mutationFn: async (id) => {
      console.log(id)
      axios.delete(`api/v1/tray/${id}`)
    },
  })

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <section className="food-card">
      <img className="food-card-avatar" src={avatar_url} alt={meal_name} />
      <div className="food-card-right-section">
        <p className="food-card-meal-name">{meal_name}</p>
        <div className="display-flex">
          <div className="price-tag">${price}</div>
          <div className="food-card-right-section-btns ">
            {active ? (
              <button
                onClick={() => {
                  setActive(!active)
                  removeFromTray.mutate(id)
                }}
                className="cart-button"
              >
                <TrayActive />
              </button>
            ) : (
              <button
                onClick={() => {
                  setActive(!active)
                  addToTray.mutate({ mealId: id, amount: 1 })
                }}
                className="cart-button"
              >
                <TrayInActive />
              </button>
            )}
            <button className="creditCard-btn">
              <CreditCardIcon />
            </button>
          </div>
        </div>
        <p className="food-card-restaurant-name">{vendor_name}</p>
      </div>
    </section>
  )
}
export default FoodCard
