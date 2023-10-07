/* eslint-disable react/prop-types */
import "./productInfoRight.scss";
import Star from "../../../assets/icons/pages/Home/star.png";
import React from "react";
import SelectionofProduct from "./component/SelectionofProduct";
import ButtonImg from "../../../components/ButtonImg";

import Basket from "../../../assets/icons/pages/detail product/shopping-cart.svg";

// eslint-disable-next-line react/prop-types
const ProductInfoRight = () => {
  //{ name, rating, price, desc }
  const [dataType] = React.useState({
    title: "Type",
    elements: ["Wireless", "Wired", "Premium"],
  });
  const [dataColor] = React.useState({
    title: "Color",
    elements: ["Black", "White", "Blue"],
  });

  return (
    <div className="ProductInfoRightAll">
      <div className="topInfoProduct">
        <h2 className="nameOfProduct">
          G502 X Lightspeed Wireless Gaming Mouse{" "}
        </h2>

        <div className="rankingProduct">
          <div className="starSide">
            <img src={Star} alt="star" />
            <span>4.8</span>
          </div>
          <p className="soldCount">1,238 Sold</p>
        </div>
        <div className="productPrice">
          <h4>{`$139.99`}</h4>
        </div>
      </div>

      <div className="middleDescription">
        <p>
          G502 X LIGHTSPEED is the latest addition to legendary G502 lineage.
          Featuring our first-ever LIGHTFORCE hybrid optical-mechanical switches
          and updated LIGHTSPEED wireless protocol with 68% faster response
          rate.
        </p>
      </div>
      <div className="lineBreak"></div>

      <div className="catchAllSelections">
        <h4 className="titleOfSide">Product Variant:</h4>

        <div className="catchSlections">
          <SelectionofProduct dataType={dataType} />
          <SelectionofProduct dataType={dataColor} />
        </div>
      </div>

      <div className="btnesOfProduct">
        <ButtonImg name={"Buy Now"} />
        <ButtonImg name={"Add to Chart"} image={Basket} />
      </div>
    </div>
  );
};

export default ProductInfoRight;
