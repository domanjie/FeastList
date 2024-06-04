import "./VendorPage.css"
import ProfileCardSection from "./ProfileCardSection"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import { SpeedingCourier, LikeIcon, SearchIcon } from "../icons"
import { useQuery } from "@tanstack/react-query"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { Link } from "react-router-dom"
import { Page } from "../page/Page"
import Search from "../search/Search"

const VendorPage = () => {
  let x = window.matchMedia("(min-width: 700px)")
  x.addEventListener("change", () => {})
  console.log(x)
  const axios = useTokenizedAxios()
  const closestToYou = useQuery({
    queryKey: ["CTY"],
    queryFn: async () => {
      const response = await axios.get("api/v1/rle/vendors?sort=CTY")
      return response.data
    },
  })
  const vendorYouMayLIke = useQuery({
    queryKey: ["VML"],
    queryFn: async () => {
      const response = await axios.get("api/v1/rle/vendors?sort=VML")
      return response.data
    },
  })
  return (
    <Page>
      <section id="vendor-page">
        <header className="vendorPage-header">
          <h2> Vendors </h2>
          <Search></Search>
        </header>
        <body className="vendorPage-body">
          <ProfileCardSection
            sectionIco={<SpeedingCourier></SpeedingCourier>}
            sectionName={"Closest to you "}
            func={closestToYou}
          ></ProfileCardSection>
          <ProfileCardSection
            sectionIco={<LikeIcon />}
            sectionName={"Vendors you may like"}
            func={vendorYouMayLIke}
          ></ProfileCardSection>
        </body>
        <footer>
          <BottomTabBar vendorInd={true}></BottomTabBar>
        </footer>
      </section>
    </Page>
  )
}
export default VendorPage
