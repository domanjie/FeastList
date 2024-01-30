import BottomTabBar from "./BottomTabBar"
import { Outlet } from "react-router-dom"
const BottomTabPage = () => {
  return (
    <>
      <Outlet></Outlet>
      <BottomTabBar></BottomTabBar>
    </>
  )
}
export default BottomTabPage
