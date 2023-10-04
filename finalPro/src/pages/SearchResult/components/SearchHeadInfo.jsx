import Selection from "../../../components/Selection";
import TitleDescription from "../../../components/TitleDescription";
import React from "react";

import MenuBar from "../../../assets/icons/pages/search/menuBar.svg";
import Menu from "../../../assets/icons/pages/search/menu.svg";
import "./searchHeadInfo.scss";

const SearchHeadInfo = () => {
  const [objData] = React.useState({
    title: "Relevant Products",
    elements: ["Electronics", "Fashion", "Book"],
  });
  return (
    <div className="searchHeadInfoAll my-SpesficContainer">
      <div className="leftInfos">
        <TitleDescription
          title={"Showing product for “Gaming Gear”"}
          desc={"Showing 1 - 60 Products"}
        />
      </div>
      <div className="rightInfos">
        <div className="leftSelectionSide">
          <p>Sort by:</p>
          <Selection data={objData} />
        </div>
        <div className="lineBridge"></div>
        <div className="rightSideMenu">
          <div className="firstIconBar">
            <img src={MenuBar} alt="menuBar" />
          </div>
          <div className="secondIconBar">
            <img src={Menu} alt="menu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeadInfo;
