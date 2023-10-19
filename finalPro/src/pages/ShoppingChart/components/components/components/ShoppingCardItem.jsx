/* eslint-disable react/prop-types */
import LeftShoppingChecking from "./Microcomponents/LeftShoppingChecking";
import RightShoppingCounter from "./Microcomponents/RightShoppingCounter";
import "./shoppingCardItem.scss";

const ShoppingCardItem = ({product}) => {
    console.log(product.id,"ssssssssss")
  return (
    <>
      <div className="ShoppingCardItem">
        <LeftShoppingChecking productInfo={product}/>
        <RightShoppingCounter />
      </div>
      <div className="lineBreakItems"></div>
     
    </>
  );
};

export default ShoppingCardItem;
