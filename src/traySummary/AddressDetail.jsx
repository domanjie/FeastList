import { useState } from "react"
import { useAddressStore } from "../customHooks/store"
import { LocationIcon, Target } from "../infra/icons"
import InputBlock from "../singUp/InputBlock"
import { RotChevronRight } from "./PaymentDetail"

const AddressDetail = () => {
  const { address, setAddress } = useAddressStore()
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const address = Object.fromEntries(formData)["address"]
    setAddress(address)
    setShowForm(false)
  }
  return (
    <div className="tsd-div">
      <RotChevronRight showForm={showForm} />
      <section className="tsd-div-section">
        <div
          onClick={() => {
            setShowForm(!showForm)
          }}
          className="tsd-div-section-div"
        >
          <LocationIcon style={{ height: "20px" }} />
          {address || "add address"}
        </div>
        {showForm && (
          <form onSubmit={handleSubmit} className="tsd-div-section-form">
            <InputBlock name="address" type="text" pText="address"></InputBlock>
            <button type="button" className="tsd-div-section-form-button">
              <Target />
              use current location
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
export default AddressDetail
