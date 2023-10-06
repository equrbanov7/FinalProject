import ReviewTopResults from "./components/ReviewTopResult/ReviewTopResults"
import ReviewBottomResult from "./components/ReviewsBottom/ReviewBottomResult"
import "./review.scss"

const Review = () => {
  return (
    <div>
      <ReviewTopResults />
      <ReviewBottomResult />
    </div>  
  )
}

export default Review