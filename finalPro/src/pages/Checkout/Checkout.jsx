import BottomShoppingChart from "../ShoppingChart/components/BottomShoppingChart";
import TopShoppingChart from "../ShoppingChart/components/TopShoppingChart";
import "./checkout.scss";

const Checkout = () => {
  return (
    <div className="CheckoutAll">
      <TopShoppingChart
        title={"Checkout"}
        desc={"Showing your choices product"}
      />
      <BottomShoppingChart />
    </div>
  );
};

export default Checkout;
