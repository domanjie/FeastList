import "./Home.css"
import FoodCardSection from "./foodCardSection/FoodCardSection"
import { FoodCardData } from "./data.js"
import { useEffect, useState } from "react"
import SideMenu from "../sideMenu/SideMenu"
import { FeastListLogo, MenuIcon, SearchIcon } from "../icons"
import Modal from "../modal/Modal"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import PageSpinner from "../spinner/PageSpinner"
import { FastFoodIcon } from "../icons"
import { Link } from "react-router-dom"
import useAuthContext from "../customHooks/useAuthContext"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { useMutation } from "@tanstack/react-query"

const Home = () => {
  const { auth } = useAuthContext()
  const [isOpen, setIsOpen] = useState(false)
  const [foodCardData, setFoodCardData] = useState([])
  const axios = useTokenizedAxios()

  const addToTray = useMutation({
    mutationFn: async () => {
      axios.post()
    },
  })

  useEffect(() => {
    axios
      .get("/api/v1/meals")
      .then((response) => setFoodCardData(response.data))
  }, [])
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
      <h3 className="food-card-title">
        <FastFoodIcon></FastFoodIcon> Feast Your Treat!
      </h3>
      <FoodCardSection FoodCardData={foodCardData} />
      <BottomTabBar homeInd={true}></BottomTabBar>
    </main>
  )
}
export default Home
