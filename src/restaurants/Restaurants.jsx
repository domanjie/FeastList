import "./Restaurants.css"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import img1 from "../images/chicken.jpg"
import img2 from "../images/meal2.jpg"
import img3 from "../images/meal3.jpg"
import img4 from "../images/pizza.jpg"
import RestaurantCard from "./RestaurantCard"
const Restaurants = () => {
  const data = [
    {
      avatar: img1,
      name: "Glystin foods",
    },
    {
      avatar: img2,
      name: "mummy praise kitchens",
    },
    { avatar: img3, name: "mama perpertual foods" },
    { avatar: img4, name: "mummy v and stores" },
  ]
  return (
    <main className="restaurants">
      <section>
        <header>
          <h4> Discover Restaurants</h4>
        </header>
        {data.map((item) => (
          <RestaurantCard {...item}></RestaurantCard>
        ))}
      </section>

      <BottomTabBar />
    </main>
  )
}
export default Restaurants
