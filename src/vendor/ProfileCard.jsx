import { RatingStars } from "../icons"
import { PlusSmall } from "../icons"
const ProfileCard = ({ vendor }) => {
  const { avatar, isFollowing, name } = vendor
  return (
    <div className="profile-card">
      <div className="profile-card-div">
        <img src={avatar} alt="" />
        <button
          className={
            isFollowing ? "follow-btn background-faff00" : "follow-btn "
          }
        >
          {isFollowing ? (
            <>Following</>
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
      <div>
        <p>{name}</p>
        <p>
          Rating
          <span>
            <RatingStars />
          </span>
        </p>
      </div>
    </div>
  )
}
export default ProfileCard
