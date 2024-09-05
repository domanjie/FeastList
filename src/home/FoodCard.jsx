import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import {
  CreditCardIcon,
  TrayActive,
  TrayInActive,
  CreditCardIcon2,
} from "../infra/icons"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"

const FoodCard = ({
  avatar_url,
  price,
  meal_name,
  vendor_name,
  is_in_cart,
  id,
  vendor_avatar_url,
}) => {
  const [active, setActive] = is_in_cart ? useState(true) : useState(false)

  const axios = useTokenizedAxios()
  const addToTray = useMutation({
    mutationFn: async (data) => {
      axios.post("api/v1/tray", data)
    },
  })
  const removeFromTray = useMutation({
    mutationFn: async (id) => {
      axios.delete(`api/v1/tray/${id}`)
    },
  })
  return (
    <section className="food-card">
      <div className="food-card-div">
        <img className="food-card-avatar" src={avatar_url} alt={meal_name} />
        <div className="food-card-btns">
          <button className="creditCard-btn">
            <CreditCardIcon2 />
          </button>
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
        </div>
      </div>

      <section className="food-card-section">
        <p className="main-font-light">{meal_name}</p>
        <p className="main-font-heavy">${price}</p>

        <div>
          <img className="profile-ico-small" src={vendor_avatar_url} alt="" />{" "}
          <p className="food-card-restaurant-name sub-font">{vendor_name}</p>
        </div>
      </section>
    </section>
  )
}
export default FoodCard
