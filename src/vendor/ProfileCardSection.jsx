import ProfileCard from "./ProfileCard"
const ProfileCardSection = ({ func }) => {
  return (
    <section className="profile-card-section">
      {func?.data?.map((vendor) => (
        <ProfileCard vendor={vendor} />
      ))}
    </section>
  )
}
export default ProfileCardSection
