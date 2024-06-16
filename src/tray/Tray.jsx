import "./Tray.css"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import CartFoodCard from "./TrayCard"
import Demarcation from "../demarcation/Demarcation"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import PageSpinner from "../spinner/PageSpinner"
import emptyTrayIco from "./food-tray_5275832.png"
import { Page } from "../page/Page"
import TraySummary from "./TraySummary"
const Tray = () => {
  const axios = useTokenizedAxios()
  const queryClient = useQueryClient()
  const trayQuery = useQuery({
    queryKey: ["tray"],
    queryFn: async () => {
      const response = await axios.get("/api/v1/tray")
      return response.data
    },
  })
  const clearTray = useMutation({
    mutationFn: async () => {
      axios.delete("/api/v1/tray")
    },
    onSuccess: () => {
      queryClient.invalidateQueries("tray")
    },
  })

  const getTotalTrayPrice = () => {
    return trayQuery?.data
      ?.map((trayItem) => trayItem.meal.price * trayItem.amount)
      ?.reduce((total, currentItemPrice) => total + currentItemPrice, 0)
  }

  while (trayQuery.isLoading) {
    return (
      <>
        <PageSpinner></PageSpinner>
      </>
    )
  }
  return (
    <Page>
      <main id="tray">
        {/* <Modal>
        <AdjustMealSubPage />
        <Payment></Payment>
      </Modal> */}
        <header className="tray-header">
          <h2>Tray</h2>
        </header>
        <body className="tray-body">
          {trayQuery?.data?.length ? (
            <>
              <section className="tray-first-section">
                <button
                  onClick={() => {
                    clearTray.mutate()
                  }}
                  className="clear-tray-btn"
                >
                  CLEAR CART
                </button>

                {trayQuery.data.map((item) => (
                  <CartFoodCard
                    {...{ ...item.meal, amount: item.amount }}
                  ></CartFoodCard>
                ))}

                <div className="tray-first-section-div">
                  <button className="checkout-btn">Checkout</button>
                  <div>
                    <p>${getTotalTrayPrice()}</p>
                    <Demarcation />
                    <p>Total</p>
                  </div>
                </div>
              </section>
              <TraySummary></TraySummary>
            </>
          ) : (
            <section>
              <img className="emptyTrayIco" src={emptyTrayIco} alt="" />
              <h2>Your Tray is empty</h2>
              <p>Meals added to Tray will appear here</p>
            </section>
          )}
        </body>
        <footer>
          <BottomTabBar trayInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default Tray
