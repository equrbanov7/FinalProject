import React from "react";
import "./topShoppingChart.scss";
import TitleDescription from "../../../components/TitleDescription";
import SelectionofProduct from "../../../components/SelectionofProduct";

const TopShoppingChart = () => {
  const [sortType] = React.useState({
    title: "Sort By",
    elements: ["Latest Added", "New", "Past"],
  });
  return (
    <div className="allTopShoppingChart">
      <div className="TopShoppingChart ">
        <TitleDescription
          title={"Shopping Chart"}
          desc={"Showing your choices product"}
        />
        <SelectionofProduct dataType={sortType} />
      </div>
    </div>
  );
};

export default TopShoppingChart;
