import "./Home.css"
import FoodCard from "./FoodCard"
import { useEffect, useRef, useState } from "react"
import SideMenu from "../sideMenu/SideMenu"
import { FeastListLogo, MenuIcon, SearchIcon, FastFoodIcon } from "../icons"
import Modal from "../modal/Modal"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import PageSpinner from "../spinner/PageSpinner"
import { Link } from "react-router-dom"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { useMutation } from "@tanstack/react-query"
import { Page } from "../page/Page"
import Search from "../search/Search"

const Home = () => {
  console.log(window.innerWidth)
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
          <Modal>
            <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </Modal>
        )}
        {/* <PageSpinner></PageSpinner> */}
        <header className="home-header">
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </button>
          <FeastListLogo className="feast-list-logo" />

          <Search></Search>
        </header>
        <body className="home-body">
          <h3 style={{ padding: "10px" }} className="home-body-header">
            <FastFoodIcon></FastFoodIcon> Feast Your Treat!
          </h3>
          <section
            className="home-section"
            style={{ padding: "0px var(--padding-from-screen-width)" }}
          >
            {foodCardData.map((item) => (
              <FoodCard key={item.id} {...item}></FoodCard>
            ))}
          </section>
        </body>
        <footer className="home-footer">
          <BottomTabBar homeInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default Home
