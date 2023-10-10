//import React from "react";
import BottomShoppingChart from "./components/BottomShoppingChart";
import TopShoppingChart from "./components/TopShoppingChart";
import RelatedPoduct from "../../components/RelatedProducts";
import "./shoppingChart.scss";

const ShoppingChart = () => {
  return (
    <div className="ShoppingChartAll">
      <div className="ShoppingChart ">
        <TopShoppingChart />
        <BottomShoppingChart />
      </div>
      <RelatedPoduct />
    </div>
  );
};

export default ShoppingChart;
