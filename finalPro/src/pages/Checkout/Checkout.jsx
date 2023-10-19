// import BottomShoppingChart from "../ShoppingChart/components/BottomShoppingChart";
import TopShoppingChart from "../ShoppingChart/components/TopShoppingChart";
import CatchBuyingItems from "../ShoppingChart/components/components/CatchBuyingItems";
import ProductSummary from "../ShoppingChart/components/components/ProductSummary";
import "./checkout.scss";
import Shipping from "./components/Shipping";

 
const Checkout = () => {
  return (
    <div className="CheckoutAll">
      <TopShoppingChart
        title={"Checkout"}
        desc={"Showing your choices product"}
      />

      <div className="allcheckoutInfosItems my-SpesficContainer">
        <div className="catchLeftItemandAddres"> 
          <Shipping />
          <CatchBuyingItems showShipping={true} />
        </div>
        <ProductSummary />
      </div>
    
    </div>
  );
};

export default Checkout;
