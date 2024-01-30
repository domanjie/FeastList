import "./VendorPage.css"
import ProfileCardSection from "./ProfileCardSection"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
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
      <BottomTabBar vendorInd={true}></BottomTabBar>
    </main>
  )
}
export default VendorPage
