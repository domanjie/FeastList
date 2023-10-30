import "./SideMenu.css"
const SideMenu = ({ setIsOpen, isOpen }) => {
  return (
    <section id="side-menu" onClick={() => setIsOpen(!isOpen)}>
      <div className="side-menu-left-div">
        <ul>
          <li>Order history</li>
          <li>help and feedback?</li>
          <li>about</li>
          <li>update account info</li>
          <li>logout</li>
        </ul>
      </div>
    </section>
  )
}
export default SideMenu
