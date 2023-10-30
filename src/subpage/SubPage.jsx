import "./SubPage.css"
import { XIcon } from "../icons"

const SubPage = ({ children }) => {
  return (
    <section className="sub-page">
      <div>
        <button className="x-btn">
          <XIcon />
        </button>
        {children}
      </div>
    </section>
  )
}
export default SubPage
