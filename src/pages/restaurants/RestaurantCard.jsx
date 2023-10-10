const RestaurantCard = ({ avatar, name }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-card-img" src={avatar} alt="" />
      <p>{name}</p>
    </div>
  )
}
export default RestaurantCard
