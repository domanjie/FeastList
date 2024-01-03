import "./VendorPage.css"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import ProfileCardSection from "./ProfileCardSection"
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
        <div className="demarcation"></div>
        <body className>
          <section>
            <h3 className="vendorPage-body-h2">Closest to you</h3>
            <ProfileCardSection func={closestToYou} />
          </section>
          <section>
            <h3 className="vendorPage-body-h2">Vendors you may like</h3>
            <ProfileCardSection func={vendorYouMayLIke} />
          </section>
        </body>
      </section>
      <BottomTabBar indicatorState={[false, false, true, false]} />
    </main>
  )
}
export default VendorPage
