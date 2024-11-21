import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { TrayActive, TrayInActive, CreditCardIcon2 } from "../infra/icons"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import Modal from "../modal/Modal"
import SubPage from "../subpage/SubPage"
import { useQuery } from "@tanstack/react-query"
import PaymentDetail from "../traySummary/PaymentDetail"
import AddressDetail from "../traySummary/AddressDetail"
import { AmountEditor } from "../tray/TrayCard"
import { useAddressStore, usePaymentDetailStore } from "../customHooks/store"
import { deliverCostQueryFn } from "../tray/TrayVendorGroup"
import { useOrderSuccessIndicator } from "../orders/OrderSuccessIndicator/OrderSuccessIndicator"
import { Cancel } from "../infra/icons"
const FoodCard = ({
  avatar_url,
  price,
  meal_name,
  vendor_name,
  is_in_cart,
  id,
  vendor_avatar_url,
}) => {
  const [isQuickPurchaseOpen, setIsQuickPurchaseOpen] = useState(false)
  const [active, setActive] = is_in_cart ? useState(true) : useState(false)

  const axios = useTokenizedAxios()
  const addToTray = useMutation({
    mutationFn: async (data) => {
      axios.post("api/v1/tray", data)
    },
  })
  const removeFromTray = useMutation({
    mutationFn: async (id) => {
      axios.delete(`api/v1/tray/${id}`)
    },
  })
  return (
    <>
      {isQuickPurchaseOpen && (
        <Modal setIsOpen={setIsQuickPurchaseOpen}>
          <SubPage>
            <QuickPurchase
              meal_name={meal_name}
              price={price}
              vendor_name={vendor_name}
              id={id}
              closeModal={() => {
                setIsQuickPurchaseOpen(false)
              }}
            ></QuickPurchase>
          </SubPage>
        </Modal>
      )}
      <section className="food-card">
        <div className="food-card-div">
          <img className="food-card-avatar" src={avatar_url} alt={meal_name} />
          <div className="food-card-btns">
            <button
              onClick={() => {
                setIsQuickPurchaseOpen(true)
              }}
              className="creditCard-btn"
            >
              <CreditCardIcon2 />
            </button>
            {active ? (
              <button
                onClick={() => {
                  setActive(!active)
                  removeFromTray.mutate(id)
                }}
                className="cart-button"
              >
                <TrayActive />
              </button>
            ) : (
              <button
                onClick={() => {
                  setActive(!active)
                  addToTray.mutate({ mealId: id, amount: 1 })
                }}
                className="cart-button"
              >
                <TrayInActive />
              </button>
            )}
          </div>
        </div>
        <section className="food-card-section">
          <p className="main-font-light">{meal_name}</p>
          <p className="main-font-heavy">${price}</p>
          <div>
            <img className="profile-ico-small" src={vendor_avatar_url} alt="" />{" "}
            <p className="food-card-restaurant-name sub-font">{vendor_name}</p>
          </div>
        </section>
      </section>
    </>
  )
}
export default FoodCard

const QuickPurchase = ({ meal_name, price, vendor_name, closeModal, id }) => {
  const [amount, setAmount] = useState(1)
  const { address } = useAddressStore()
  const { ccDetails } = usePaymentDetailStore()
  const { showIndicator } = useOrderSuccessIndicator()
  const axios = useTokenizedAxios()
  const placeOrder = useMutation({
    mutationFn: async () => {
      axios
        .post("api/v1/orders", {
          deliveryLocation: address,
          orderGroupDtos: [
            { vendorId: vendor_name, orderItems: { [id]: amount } },
          ],
          creditCardPaymentDetails: ccDetails,
        })
        .then(() => {
          showIndicator(true)
          closeModal()
        })
    },
    retry: 0,
  })
  const handleIncrease = () => {
    setAmount((prev) => ++prev)
  }
  const handleDecrease = () => {
    if (amount === 1) closeModal()
    else setAmount((prev) => --prev)
  }
  const params = { address, vendorName: vendor_name }
  const deliveryFeeQuery = useQuery({
    queryKey: [address],
    queryFn: () => deliverCostQueryFn(axios, params),
  })
  const totalItemFee = price * amount

  return (
    <section className="summary">
      <header
        className="summary-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "baseline", columnGap: "4px" }}
        >
          <h3>{meal_name}</h3> . <p className="sub-font">{vendor_name}</p>
        </div>
        <button onClick={closeModal}>
          <Cancel style={{ color: "#000", transform: "scale(1.3)" }}></Cancel>
        </button>
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
          <p className=" summary-row-p">Quantity :</p>
          <AmountEditor
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            amount={amount}
          ></AmountEditor>
        </div>
        <div className="summary-row">
          <p className="summary-row-p">Total Item Fee :</p>
          <span>{totalItemFee}</span>
        </div>
        <div className="summary-row">
          <p className="summary-row-p">Delivery Fee :</p>
          <span>
            {deliveryFeeQuery.data ? `$${deliveryFeeQuery.data}` : "--"}
          </span>
        </div>
      </body>
      <footer className="summary-footer">
        <div className="summary-row">
          <p className="summary-row-p">Total :</p>
          <span>
            {deliveryFeeQuery.data
              ? `$${deliveryFeeQuery.data + totalItemFee}`
              : "--"}
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
          Buy Now
        </button>
      </footer>
    </section>
  )
}
