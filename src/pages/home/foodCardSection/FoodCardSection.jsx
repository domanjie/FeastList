import FoodCard from "./FoodCard"

const foodCardSection = ({ FoodCardData }) => {
  return (
    <section>
      {FoodCardData.map((item) => (
        <FoodCard {...item}></FoodCard>
      ))}
    </section>
  )
}
export default foodCardSection
