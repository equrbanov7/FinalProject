import WayOfPage from "../../components/WayOfPage"
import FilterAndProducts from "./components/FilterAndProducts"

import SearchHeadInfo from "./components/SearchHeadInfo"
import "./searchResult.scss"

const SearchResult = () => {
  
  return (
    <div className="searchResultMainCss my-SpesficContainer">
      <WayOfPage />
      <SearchHeadInfo />
      <FilterAndProducts />
    </div>
  )
}

export default SearchResult