import "./TraySummary.css"
import {
  useAddressStore,
  useDeliveryCostStore,
  usePaymentDetailStore,
} from "../customHooks/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { useOrderSuccessIndicator } from "../orders/OrderSuccessIndicator/OrderSuccessIndicator"
import AddressDetail from "./AddressDetail"
import PaymentDetail from "./PaymentDetail"

const TraySummary = ({ totalItemCost }) => {
  const queryClient = useQueryClient()
  const { getTotalDeliveryCost } = useDeliveryCostStore()
  const totalDeliveryCost = getTotalDeliveryCost()
  const { ccDetails } = usePaymentDetailStore()
  const { address } = useAddressStore()
  const { showIndicator } = useOrderSuccessIndicator()
  const axios = useTokenizedAxios()

  const trayData = queryClient.getQueryData(["tray"])
  const orderGroups = trayData?.map((data) => ({
    vendorId: data.vendorName,
    orderItems: data.trayItems.reduce(
      (obj, curr) => ({ ...obj, [curr.itemId]: curr.amount }),
      {}
    ),
  }))

  const placeOrder = useMutation({
    mutationFn: async () => {
      axios
        .post("api/v1/orders", {
          deliveryLocation: address,
          orderGroupDtos: orderGroups,
          creditCardPaymentDetails: ccDetails,
        })
        .then(() => {
          axios.delete("/api/v1/tray").then(() => {
            queryClient.invalidateQueries("tray")
          })
          showIndicator(true)
        })
    },
    retry: 0,
  })
  return (
    <section className="summary">
      <header className="summary-header">
        <h3>summary</h3>
      </header>
      <body className="summary-body">
        <div className="summary-row summary-detail">
          <p className="summary-row-p">Delivery Address</p>
          <AddressDetail />
        </div>
        <div className="summary-row summary-detail">
          <p className="summary-row-p"> Payment Details </p>
          <PaymentDetail />
        </div>
        <div className="summary-row">
          <p className="summary-row-p">Total Item Fee :</p>
          <span>${totalItemCost}</span>
        </div>
        <div className="summary-row">
          <p className="summary-row-p">Delivery Fee :</p>
          <span>{totalDeliveryCost ? `$${totalDeliveryCost}` : "--"}</span>
        </div>
      </body>

      <footer className="summary-footer">
        <div className="summary-row">
          <p className="summary-row-p">Total :</p>
          <span>
            {totalDeliveryCost && totalItemCost ? (
              <>${totalItemCost + totalDeliveryCost}</>
            ) : (
              "--"
            )}
          </span>
        </div>
        <button
          disabled={address && ccDetails ? false : true}
          style={{ marginTop: "12px" }}
          className="checkout-btn"
          onClick={() => {
            placeOrder.mutate()
          }}
        >
          Pay Now
        </button>
      </footer>
    </section>
  )
}
export default TraySummary
