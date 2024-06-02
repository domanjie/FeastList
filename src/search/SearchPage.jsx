import "./SearchPage.css"
import { ArrowLongLeft } from "../icons"
import Demarcation from "../demarcation/Demarcation"
import { useNavigate } from "react-router-dom"
const SearchPage = () => {
  const navigate = useNavigate()
  return (
    <div className="search-page">
      <header className="search-page-header">
        <button onClick={() => navigate(-1)} className="arrowLongLeft-btn">
          <ArrowLongLeft />
        </button>
        <input
          type="search"
          placeholder="Search"
          id="search-page-input"
          autoFocus
        />
      </header>
      <Demarcation />
    </div>
  )
}
export default SearchPage
