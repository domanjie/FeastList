import "./SideMenu.css"
import { InfoIcon } from "../icons"
const SideMenu = ({ setIsOpen, isOpen }) => {
  return (
    <section id="side-menu" onClick={() => setIsOpen(!isOpen)}>
      <div
        className="side-menu-left-div"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <header>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F333759022369096716%2F&psig=AOvVaw03_9ikQ_hX4IPi_GC40Rwe&ust=1704192995356000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwixnJrig7yDAxXHmicCHWG-BC8Qr4kDegQIARBy"
            alt=""
          />
          <p>domanjie@gmail.com</p>
        </header>
        <ul>
          <li>Order history</li>
          <li>help and feedback?</li>
          <li>about</li>
          <li>update account info</li>
          <li>logout</li>
        </ul>
        <button className="info-button">
          <InfoIcon></InfoIcon>
        </button>
      </div>
    </section>
  )
}
export default SideMenu
