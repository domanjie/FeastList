import "./SearchPage.css"
import { SearchIcon } from "../infra/icons"
const Search = () => {
  return (
    <div id="search">
      {/* <Link to={"/search"}> */}
      <button className="search-button">
        <SearchIcon />
      </button>
      <input className="search-input" placeholder="Search" type="text" />
      {/* </Link> */}
    </div>
  )
}
export default Search
