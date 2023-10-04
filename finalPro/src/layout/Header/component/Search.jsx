import React from "react";
import Selection from "../../../components/Selection";

import styles from "./search.module.scss";

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [objData, setObjData] = React.useState({
    title: "All Categories",
    elements: ["Electronics", "Fashion", "Book"],
  });

  return (
    <div className={styles.middleSearch}>
      <div className={styles.searchSide}>
        <Selection data={objData} />
        <div className={styles.line}></div>
        <div className={styles.searchING}>
          <input type="text" placeholder="Search on lenny..." />
        </div>
      </div>
    </div>
  );
};

export default Search;
