import { useEffect } from "react"
import ProfileCard from "./ProfileCard"

const ProfileCardSection = ({ sectionIco, sectionName, func }) => {
  return (
    <>
      <section>
        <h3 className="vendorPage-body-h3">
          <div>
            {sectionIco} {sectionName}
          </div>
          {/* {!isMobile && <h4>view all</h4>} */}
        </h3>
        <section
          style={{ textTransform: "capitalize" }}
          className="profile-card-section"
        >
          {func?.data?.map((vendor) => (
            <ProfileCard vendor={vendor} />
          ))}
        </section>
      </section>
    </>
  )
}
export default ProfileCardSection
