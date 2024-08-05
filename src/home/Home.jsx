import "./Home.css"
import FoodCard from "./FoodCard"
import { useEffect, useState } from "react"
import SideMenu from "../sideMenu/SideMenu"
import { FeastListLogo, MenuIcon, FastFoodIcon } from "../icons"
import Modal from "../modal/Modal"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { Page } from "../page/Page"
import Search from "../search/Search"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [foodCardData, setFoodCardData] = useState([])
  const axios = useTokenizedAxios()
  useEffect(() => {
    axios
      .get("/api/v1/meals")
      .then((response) => setFoodCardData(response.data))
  }, [])
  return (
    <Page>
      <main id="home">
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <SideMenu />
          </Modal>
        )}

        <header className="home-header">
          <button className="menu-button" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </button>
          <FeastListLogo className="feast-list-logo" />
          <Search></Search>
        </header>
        <section className="home-body">
          <h3 style={{ padding: "10px" }} className="home-body-header">
            <FastFoodIcon></FastFoodIcon> Feast Your Treat!
          </h3>
          <section className="home-section">
            {foodCardData.map((item) => (
              <FoodCard key={item.id} {...item}></FoodCard>
            ))}
          </section>
        </section>
        <footer className="home-footer">
          <BottomTabBar homeInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default Home
