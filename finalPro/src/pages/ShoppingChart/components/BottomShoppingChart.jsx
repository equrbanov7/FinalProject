import "./bottomShoppingChart.scss"
import CatchBuyingItems from "./components/CatchBuyingItems"
import ProductSummary from "./components/ProductSummary"

const BottomShoppingChart = () => {
  return (
    <div className="BottomShoppingChart my-SpesficContainer ">
        <CatchBuyingItems />
        <ProductSummary />
    </div>
  )
}

export default BottomShoppingChart