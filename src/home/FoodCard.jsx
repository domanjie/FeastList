import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { CreditCardIcon, TrayActive, TrayInActive } from "../icons"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"

const FoodCard = ({
  avatar_url,
  price,
  meal_name,
  vendor_name,
  is_in_cart,
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
      <section className="food-card-section">
        <p className="food-card-meal-name">{meal_name}</p>
        <p className="price-tag">${price}</p>
        <div className="food-card-btns">
          <button className="creditCard-btn">
            <CreditCardIcon />
          </button>
          {is_in_cart ? (
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
        </div>

        <div>
          <img src="" alt="" />{" "}
          <p className="food-card-restaurant-name">{vendor_name}</p>
        </div>
      </section>
    </section>
  )
}
export default FoodCard
