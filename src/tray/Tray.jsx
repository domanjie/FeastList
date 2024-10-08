import "./Tray.css"
import BottomTabBar from "../bottomTabBar/BottomTabBar"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import PageSpinner from "../spinner/PageSpinner"
import emptyTrayIco from "./food-tray_5275832.png"
import { Page } from "../page/Page"
import TraySummary from "../traySummary/TraySummary"
import Modal from "../modal/Modal"
import Payment from "../traySummary/TraySummaryM"
import { useState } from "react"
import OrderSuccessIndicator from "./OrderSuccessIndicator"
import VendorGroup from "./TrayVendorGroup"
const Tray = () => {
  const axios = useTokenizedAxios()
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false)

  const trayQuery = useQuery({
    queryKey: ["tray"],
    queryFn: async () => {
      const response = await axios.get("/api/v1/tray")
      return response.data
    },
  })

  const clearTray = useMutation({
    mutationKey: ["clearTray"],
    mutationFn: async () => {
      axios.delete("/api/v1/tray").then(() => {
        queryClient.invalidateQueries("tray")
      })
    },
  })
  const getTotalItemCost = () => {
    return trayQuery?.data
      ?.map((vendorGroup) =>
        vendorGroup.trayItems
          ?.map((trayItem) => trayItem.price * trayItem.amount)
          ?.reduce((total, currentItemPrice) => total + currentItemPrice, 0)
      )
      ?.reduce((total, currentItemPrice) => total + currentItemPrice, 0)
  }
  const totalItemCost = getTotalItemCost()

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
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <Payment></Payment>
          </Modal>
        )}
        <header className="tray-header">
          <h2>Tray</h2>
        </header>
        <body className="tray-body">
          {trayQuery?.data?.length ? (
            <>
              <section className="tray-body-section">
                <button
                  onClick={() => {
                    clearTray.mutate()
                  }}
                  className="clear-tray-btn"
                >
                  CLEAR TRAY
                </button>

                {trayQuery.data.map((data) => {
                  return <VendorGroup data={data}></VendorGroup>
                })}

                <div className="tray-body-section-div">
                  <button
                    className="checkout-btn"
                    onClick={() => setIsOpen(true)}
                  >
                    Checkout
                  </button>
                  <div>
                    <p>${totalItemCost}</p>
                    <p className="sub-font">Total</p>
                  </div>
                </div>
              </section>
              <div className="tray-body-summary">
                <TraySummary
                  trayData={trayQuery.data}
                  totalItemCost={getTotalItemCost()}
                ></TraySummary>
              </div>
            </>
          ) : (
            <section>
              <img className="emptyTrayIco" src={emptyTrayIco} alt="" />
              <h2>Your Tray is empty</h2>
              <p>Meals added to Tray will appear here</p>
            </section>
          )}
        </body>
        <OrderSuccessIndicator></OrderSuccessIndicator>
        <footer>
          <BottomTabBar trayInd={true}></BottomTabBar>
        </footer>
      </main>
    </Page>
  )
}
export default Tray

// export const clearTray = async () => {
//   return
// }
