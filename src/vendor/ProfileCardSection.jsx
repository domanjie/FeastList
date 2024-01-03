import ProfileCard from "./ProfileCard"
import dominosAvatar from "../images/dominos_pizza.jpg"
import creamTownAvatar from "../images/cream_town.webp"
import maticeAvatar from "../images/matice.webp"
import gtFoodsAvatar from "../images/gt_foods.jpg"
const ProfileCardSection = ({ func }) => {
  const data = [
    {
      id: 1,
      avatar: dominosAvatar,
      name: "Dominos Pizza",
      followers: "21k",
      isFollowing: false,
    },
    {
      id: 2,
      avatar: gtFoodsAvatar,
      name: "GT-Foods",
      followers: "12k",
      isFollowing: true,
    },
    {
      id: 3,
      avatar: creamTownAvatar,
      name: "Cream-Town",
      followers: "30k",
      isFollowing: false,
    },
    {
      id: 4,
      avatar: maticeAvatar,
      name: "Mat-Ice",
      followers: "999",
      isFollowing: true,
    },
  ]
  return (
    <section className="profile-card-section">
      {data.map((vendor) => (
        <ProfileCard vendor={vendor} />
      ))}
    </section>
  )
}
export default ProfileCardSection
