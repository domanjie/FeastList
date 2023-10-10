import "./Home.css"
import FoodButtonSection from "./FoodButtonSection/FoodButtonSection"
import FoodCardSection from "./foodCardSection/foodCardSection"
import { FoodItemData, FoodCardData } from "./data.js"
import { useState } from "react"
import SideMenu from "./SideMenu"
import BottomTabBar from "../../bottomTabBar/BottomTabBar"
import { FeastListLogo, MenuIcon } from "../../icons.jsx"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main id="home">
      {isOpen && <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />}

      <header className="home-header">
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </button>
        <FeastListLogo />
      </header>

      <div className="demarcation" />

      <FoodButtonSection FoodItemData={FoodItemData} />

      <div className="demarcation" />

      <h3 className="food-card-title">Feast Your Treat!</h3>

      <FoodCardSection FoodCardData={FoodCardData} />

      <BottomTabBar />
    </main>
  )
}
export default Home
0
