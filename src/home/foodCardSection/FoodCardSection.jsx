import FoodCard from "./FoodCard"

const foodCardSection = ({ FoodCardData }) => {
  return (
    <section className="food-card-section">
      {FoodCardData.map((item) => (
        <FoodCard key={item.id} {...item}></FoodCard>
      ))}
    </section>
  )
}
export default foodCardSection
