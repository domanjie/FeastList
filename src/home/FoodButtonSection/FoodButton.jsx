const FoodButton = ({ avatar, name }) => {
  return (
    <button className="food-button">
      <span>
        <img src={avatar} alt={name} />
        <p>{name}</p>
      </span>
    </button>
  )
}
export default FoodButton
