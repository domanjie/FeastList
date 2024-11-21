import "./OrderSuccessIndicator.css"
import { create } from "zustand"
import { Cancel } from "../../infra/icons"
import { Link, Outlet } from "react-router-dom"
import { useEffect, useRef } from "react"
const OrderSuccessIndicator = () => {
  const { indicator, showIndicator } = useOrderSuccessIndicator()
  const ref = useRef()
  const scheduleRemoval = () => {
    return setTimeout(() => {
      showIndicator(false)
    }, 4000)
  }
  useEffect(() => {
    if (indicator) {
      const timeoutId = scheduleRemoval()

      ref.current.onmouseenter = () => {
        clearTimeout(timeoutId)
      }
      ref.current.onmouseleave = () => {
        const newTimeoutId = scheduleRemoval()
        ref.current.onmouseenter = () => {
          clearTimeout(newTimeoutId)
        }
      }
    }
  }, [indicator])
  return (
    <>
      <Outlet></Outlet>
      <div
        ref={ref}
        className={`order-success-indicator  ${indicator && "display"} `}
      >
        <div className="order-success-indicator-div">
          You have Successfully Placed You Order
          <div className="dotIco"></div>
          <Link style={{ all: "unset" }} to={"/orders"}>
            <p className="order-success-indicator-span">view order</p>
          </Link>
        </div>
        <button onClick={() => showIndicator(false)}>
          <Cancel style={{ transform: "scale(1.3)", color: "white" }}></Cancel>
        </button>
      </div>
    </>
  )
}
export default OrderSuccessIndicator

export const useOrderSuccessIndicator = create((set) => ({
  indicator: false,
  showIndicator: (bool) => {
    set({ indicator: bool })
  },
}))
