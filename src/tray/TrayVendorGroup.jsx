import { useQuery } from "@tanstack/react-query"
import TrayCard from "./TrayCard"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import { useEffect } from "react"
import { InlineSpinner } from "../spinner/Spinner"
import { useAddressStore, useDeliveryCostStore } from "../customHooks/store"
const TrayVendorGroup = ({ data }) => {
  const { vendorName, vendorAvatar, trayItems } = data
  return (
    <section className="TrayVendorGroup ">
      <TVGFrame vendorAvatar={vendorAvatar} vendorName={vendorName}></TVGFrame>
      {trayItems.map((item) => {
        return <TrayCard {...item}></TrayCard>
      })}
    </section>
  )
}
const TVGFrame = ({ vendorName, vendorAvatar }) => {
  const { addDeliveryCost } = useDeliveryCostStore()
  const { address } = useAddressStore()
  const axios = useTokenizedAxios()
  const queryFn = async () => {
    const response = await axios.get("api/v1/delivery/cost", {
      params: {
        address: address,
        vendorName: vendorName,
      },
    })
    return response.data
  }
  const deliveryFeeQuery = useQuery({
    queryKey: [address],
    queryFn: queryFn,
  })
  const deliveryCost = deliveryFeeQuery?.data
  useEffect(() => {
    addDeliveryCost(vendorName, deliveryCost)
  }, [deliveryCost])

  return (
    <div className="sub-font TVGFrame ">
      <img
        src={vendorAvatar}
        className="profile-ico-small"
        style={{ marginRight: "4px" }}
      />
      <p>{vendorName}</p>
      <div>.</div>
      <span className="TVGFrame-span">
        delivery fee:
        {deliveryFeeQuery.isLoading ? (
          <InlineSpinner />
        ) : deliveryCost ? (
          `$${deliveryCost}`
        ) : (
          "--"
        )}
      </span>
    </div>
  )
}

export default TrayVendorGroup
