import "./VendorPage.css"
import ProfileCardSection from "./ProfileCardSection"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import { SpeedingCourier, LikeIcon, SearchIcon } from "../icons"
import { useQuery } from "@tanstack/react-query"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { Link } from "react-router-dom"
const VendorPage = () => {
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
    <main>
      <section>
        <header className="vendorPage-header">
          <h2> Vendors </h2>
          <Link to={"/search"}>
            <button className="search-button">
              <SearchIcon />
            </button>
          </Link>
        </header>
        <body className>
          <section>
            <h3 className="vendorPage-body-h3">
              <SpeedingCourier></SpeedingCourier> Closest to you
            </h3>
            <ProfileCardSection func={closestToYou} />
          </section>
          <section>
            <h3 className="vendorPage-body-h3">
              <LikeIcon />
              Vendors you may like
            </h3>
            <ProfileCardSection func={vendorYouMayLIke} />
          </section>
        </body>
      </section>
      <BottomTabBar vendorInd={true}></BottomTabBar>
    </main>
  )
}
export default VendorPage
