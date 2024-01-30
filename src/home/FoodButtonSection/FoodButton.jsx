import { useEffect } from "react"

const FoodButton = ({ id, avatar, name, handleClick }) => {
  return (
    <button
      key={id}
      onClick={() => {
        handleClick(id)
      }}
      className="food-button"
    >
      <span>
        <img src={avatar} alt={name} />
        <p>{name}</p>
      </span>
    </button>
  )
}
export default FoodButton
