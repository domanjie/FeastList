import "./Home.css"
import FoodButtonSection from "./FoodButtonSection/FoodButtonSection"
import FoodCardSection from "./foodCardSection/FoodCardSection"
import { FoodItemData, FoodCardData } from "./data.js"
import { useState } from "react"
import SideMenu from "../sideMenu/SideMenu"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import { FeastListLogo, MenuIcon, CreditCardIcon } from "../icons"
import Demarcation from "../demarcation/Demarcation"
import Modal from "../modal/Modal"
import PageSpinner from "../spinner/PageSpinner"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main id="home">
      {isOpen && (
        <Modal>
          <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </Modal>
      )}
      {/* <PageSpinner></PageSpinner> */}
      <header className="home-header">
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </button>
        <FeastListLogo />
      </header>
      <FoodButtonSection FoodItemData={FoodItemData} />
      <h3 className="food-card-title">Feast Your Treat</h3>
      <FoodCardSection FoodCardData={FoodCardData} />
      <BottomTabBar indicatorState={[true, false, false, false]} />
    </main>
  )
}
export default Home
