import "./VendorPage.css"
import ProfileCardSection from "./ProfileCardSection"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import { SpeedingCourier } from "../icons"
import { LikeIcon } from "../icons"
const VendorPage = () => {
  const closestToYou = async () => {
    const response = await fetch("fsdflasjflkadsf")
    return response.json
  }
  const vendorYouMayLIke = async () => {
    const response = await fetch("fsdflasjflkadsf")
    return response.json
  }
  return (
    <main>
      <section>
        <header className="vendorPage-header">
          <h2> Vendors </h2>
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
              <LikeIcon></LikeIcon>Vendors you may like
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
