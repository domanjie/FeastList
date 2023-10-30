import "./SearchPage.css"
import { ArrowLongLeft } from "../icons"
import Demarcation from "../demarcation/Demarcation"
const SearchPage = () => {
  return (
    <div className="search-page">
      <header className="search-page-header">
        <button className="arrowLongLeft-btn">
          <ArrowLongLeft />
        </button>
        <input type="search" placeholder="Search" id="search-input" autoFocus />
      </header>
      <Demarcation />
    </div>
  )
}
export default SearchPage
