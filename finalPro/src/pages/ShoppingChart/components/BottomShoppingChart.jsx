import "./bottomShoppingChart.scss";
import CatchBuyingItems from "./components/CatchBuyingItems";
import ProductSummary from "./components/ProductSummary";
import { useSelector } from "react-redux";
const BottomShoppingChart = () => {
  const { productIds } = useSelector((state) => state.selectedProducts);
  //console.log(productIds, "aaaadkjas");
  return (
    <div className="BottomShoppingChart">
      {productIds.length > 1 ? (
        <>
          <CatchBuyingItems />
          <ProductSummary />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomShoppingChart;
