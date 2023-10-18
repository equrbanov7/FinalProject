import ReviewTopResults from "./components/ReviewTopResult/ReviewTopResults"
import ReviewBottomResult from "./components/ReviewsBottom/ReviewBottomResult"
import "./review.scss"

const Review = () => {
  function closeFilter(){
    
    const showingElement=document.querySelector(".catchFilterAll");
    showingElement.classList.remove("filterMobile");
    const overlayElm= document.querySelector(".ovarley")
    overlayElm.classList.toggle("changeOpacity")
    
   // console.log("ovarleyyy")
  }
  return (
    <div className="forSpesficCatchAllReviewOve">
      <ReviewTopResults />
      <ReviewBottomResult />
      <div className="ovarley" onClick={closeFilter}></div>
    </div>  
  )
}

export default Review