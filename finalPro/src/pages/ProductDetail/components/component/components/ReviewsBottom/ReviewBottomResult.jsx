import FilterSide from "../../../../../SearchResult/components/FilterSide"
import ReviewsRightItems from "./component/ReviewsRightItems"
import "./reviewBottomResult.scss"

const ReviewBottomResult = () => {
  return (
    <div className="ReviewBottomResult">
        <FilterSide />
        <ReviewsRightItems />
    </div>
  )
}

export default ReviewBottomResult