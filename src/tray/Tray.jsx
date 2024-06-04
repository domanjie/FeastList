import "./Tray.css"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import CartFoodCard from "./TrayFoodCard"
import Demarcation from "../demarcation/Demarcation"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import PageSpinner from "../spinner/PageSpinner"
import emptyTrayIco from "./food-tray_5275832.png"
import { Page } from "../page/Page"
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
      <main id="cart">
        {/* <Modal>
        <AdjustMealSubPage />
        <Payment></Payment>
      </Modal> */}
        <header className="cart-header">
          <h2>Tray</h2>

          {trayQuery?.data?.length ? (
            <button
              onClick={() => {
                clearTray.mutate()
              }}
              className="clear-cart-btn"
            >
              CLEAR CART
            </button>
          ) : (
            <></>
          )}
        </header>
        <body className="cart-body">
          {trayQuery?.data?.length ? (
            <section className="cart-first-section">
              {trayQuery.data.map((item) => (
                <CartFoodCard
                  {...{ ...item.meal, amount: item.amount }}
                ></CartFoodCard>
              ))}

              <div className="cart-first-section-div">
                <button className="checkout-btn">Checkout</button>
                <div>
                  <p>${getTotalTrayPrice()}</p>
                  <Demarcation />
                  <p>Total</p>
                </div>
              </div>
            </section>
          ) : (
            <section>
              <img className="emptyTrayIco" src={emptyTrayIco} alt="" />
              <h2>Your Tray is empty</h2>
              <p>Meals added to Tray will appear here</p>
            </section>
          )}
        </body>
        <footer>
          <BottomTabBar cartInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default Tray
