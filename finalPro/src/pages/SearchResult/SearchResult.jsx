//import WayOfPage from "../../components/WayOfPage"
import FilterAndProducts from "./components/FilterAndProducts"

import SearchHeadInfo from "./components/SearchHeadInfo"
import "./searchResult.scss"
import { useParams } from "react-router-dom"

const SearchResult = () => {
  const {search}  =useParams()

  console.log(search, '+++++++');
  
  return (
    <div className="searchResultMainCss my-SpesficContainer">
      {/* <WayOfPage /> */}
      <SearchHeadInfo />
      <FilterAndProducts searchId={search} />
    </div> 
  )
}

export default SearchResult