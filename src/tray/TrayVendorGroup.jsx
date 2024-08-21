import TrayCard from "./TrayCard"
const TrayVendorGroup = ({ data, deliveryFee }) => {
  const { vendorName, vendorAvatar, trayItems } = data
  return (
    <section className="TrayVendorGroup sub-font">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "2px",
          fontSize: "14px",
        }}
      >
        <img
          src={vendorAvatar}
          className="profile-ico-small"
          style={{ marginRight: "10px" }}
        />
        <p style={{ textTransform: "capitalize" }}> {vendorName}</p>.
        <span>delivery fee: --{deliveryFee}</span>
      </div>

      {trayItems.map((item) => {
        return <TrayCard {...item}></TrayCard>
      })}
    </section>
  )
}
export default TrayVendorGroup
