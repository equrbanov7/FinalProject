/* eslint-disable react/prop-types */
import "./catchBuyingItems.scss";
import ThreeElements from "../../../../components/ThreeElements";

import LogiTechC from "../../../../assets/icons/pages/search/LogiTechC.svg";
import ShoppingCardItem from "./components/ShoppingCardItem";
import ShippingBottom from "../../../Checkout/components/ShippingBottom";

import { useSelector } from "react-redux";


const CatchBuyingItems = ({ showShipping }) => {
 

  const { selectedProducts } = useSelector((state) => state.selectedProducts);
  //console.log(selectedProducts, "selectt");

  const data = ["Logitech Indonesia", "Central Jakarta"];

  return (
    <div className="CatchBuyingItems">
      <div className="nameOfcompany">
        <ThreeElements image={LogiTechC} dataCreator={data} />
      </div>

      <div className="selectingItemsOfProducts">
        {selectedProducts?.data?.map((product,id) => (
          <ShoppingCardItem key={id} product={product}/>
        ))}

        {showShipping ? <ShippingBottom /> : ""}
      </div>
    </div>
  );
};

export default CatchBuyingItems;
