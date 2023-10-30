import FoodCard from "./FoodCard"

const foodCardSection = ({ FoodCardData }) => {
  return (
    <section className="food-card-section">
      {FoodCardData.map((item) => (
        <FoodCard {...item}></FoodCard>
      ))}
    </section>
  )
}
export default foodCardSection
