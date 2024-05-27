import { PlusSmall } from "../icons"
const ProfileCard = ({ vendor }) => {
  let { header_photo: avatar, isFollowing, vendor_name: name } = vendor
  isFollowing = true
  return (
    <div className="profile-card">
      <img src={avatar} alt="" />
      <div className="profile-card-div">
        <p>{name}</p>
        <button className={isFollowing ? "following" : "follow"}>
          {isFollowing ? (
            <>following</>
          ) : (
            <>
              follow
              <span className="plus-small">
                <PlusSmall />
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
export default ProfileCard
