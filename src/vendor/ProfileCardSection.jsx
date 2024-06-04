import { useEffect } from "react"
import ProfileCard from "./ProfileCard"

const ProfileCardSection = ({ sectionIco, sectionName, func }) => {
  // let data = func?.data //func.datacondition
  // let isMobile = true
  // window.innerWidth > 1300
  // const width = window.innerWidth //? true : false
  // if (width > 992) {
  //   isMobile = false
  //   let threshold = 4
  //   if (data?.length < threshold) {
  //     isMobile = true
  //   }
  //   data = data?.slice(0)
  // }

  return (
    <>
      <section>
        <h3 className="vendorPage-body-h3">
          <div>
            {sectionIco} {sectionName}
          </div>
          {/* {!isMobile && <h4>view all</h4>} */}
        </h3>
        <section className="profile-card-section">
          {func?.data?.map((vendor) => (
            <ProfileCard vendor={vendor} />
          ))}
        </section>
      </section>
    </>
  )
}
export default ProfileCardSection
