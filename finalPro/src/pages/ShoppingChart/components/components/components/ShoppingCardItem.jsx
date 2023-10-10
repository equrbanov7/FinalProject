import LeftShoppingChecking from "./Microcomponents/LeftShoppingChecking";
import RightShoppingCounter from "./Microcomponents/RightShoppingCounter";
import "./shoppingCardItem.scss";

const ShoppingCardItem = () => {
  return (
    <>
      <div className="ShoppingCardItem">
        <LeftShoppingChecking />
        <RightShoppingCounter />
      </div>
      <div className="lineBreakItems"></div>
      <div className="ShoppingCardItem">
        <LeftShoppingChecking />
        <RightShoppingCounter />
      </div>
      <div className="lineBreakItems"></div>
      <div className="ShoppingCardItem">
        <LeftShoppingChecking />
        <RightShoppingCounter />
      </div>
      <div className="lineBreakItems"></div>
      <div className="ShoppingCardItem">
        <LeftShoppingChecking />
        <RightShoppingCounter />
      </div>
    </>
  );
};

export default ShoppingCardItem;
