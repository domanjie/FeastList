import TrayCard from "./TrayCard"
const TrayVendorGroup = ({ data, deliveryFee }) => {
  const { vendorName, vendorAvatar, trayItems } = data
  return (
    <section className="TrayVendorGroup ">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "2px",
        }}
      >
        <img
          src={vendorAvatar}
          className="profile-ico-small"
          style={{ marginRight: "10px" }}
        />
        <p className="main-font-light" style={{ fontSize: "14px" }}>
          {vendorName}
        </p>
        .<span className="sub-font">delivery fee: --{deliveryFee}</span>
      </div>

      {trayItems.map((item) => {
        return <TrayCard {...item}></TrayCard>
      })}
    </section>
  )
}
export default TrayVendorGroup
