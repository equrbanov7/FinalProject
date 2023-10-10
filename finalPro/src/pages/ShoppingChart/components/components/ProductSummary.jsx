import "./productSummary.scss";
import TitleDescription from "../../../../components/TitleDescription";
import { AiOutlineRight } from "react-icons/ai";
import ThreeElements from "../../../../components/ThreeElements";
import PromoCode from "../../../../assets/icons/pages/shoppingChart/promoCode.svg";
import Button from "../../../../components/Button";

const ProductSummary = () => {
  return (
    <div className="ProductSummary">
      <h1  className="titleOfCheckBox">Product Summary</h1>
      <div className="selectedProductsInBox">
        <TitleDescription title={"No products selected"} />
      </div>
      <div className="lineBreakBox"></div>
      <div className="calculatedItems">
        <TitleDescription title={"Total Price"} desc={`$${0}`} />
        <TitleDescription title={"Total Price (Discount)"} desc={`$${0}`} />
        <TitleDescription title={"Tax & Fee"} desc={`$${0}`} />
      </div>
      <div className="lineBreakBox"></div>
      <div className="totalPriceItems">
        <TitleDescription title={"Total Price"} desc={`$${0}`} />
      </div>
      <div className="usingPromocode">
        <ThreeElements
          image={PromoCode}
          dataCreator={["Use a Promo", "Choose product to use promo"]}
        />
        <AiOutlineRight />
      </div>
      
      <div className="checkoutCLick">
      <Button btnData={"Checkout"} />
      </div>
    
    </div>
  );
};

export default ProductSummary;
