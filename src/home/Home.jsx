import "./Home.css"
import FoodButtonSection from "./FoodButtonSection/FoodButtonSection"
import FoodCardSection from "./foodCardSection/FoodCardSection"
import { FoodItemData, FoodCardData } from "./data.js"
import { useState } from "react"
import SideMenu from "../sideMenu/SideMenu"
import { FeastListLogo, MenuIcon, SearchIcon } from "../icons"
import Modal from "../modal/Modal"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import PageSpinner from "../spinner/PageSpinner"
import { Link } from "react-router-dom"

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
        <Link to={"/search"}>
          <button className="search-button">
            <SearchIcon />
          </button>
        </Link>
      </header>
      <FoodButtonSection FoodItemData={FoodItemData} />
      <h3 className="food-card-title">Feast Your Treat</h3>
      <FoodCardSection FoodCardData={FoodCardData} />
      <BottomTabBar homeInd={true}></BottomTabBar>
    </main>
  )
}
export default Home
