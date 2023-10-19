import React from "react";
import "./rightShoppingCounter.scss";
import Delete from "../../../../../../assets/icons/pages/search/trash.svg";
import Button from "../../../../../../components/Button";

const RightShoppingCounter = () => {
  const [counter, setCounter] = React.useState(1);

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  }

  return (
    <div className="RightShoppingCounter">
      <div className="forWishCard">
        <h5 className="wishingProduct">Add to Favourite</h5>
      </div>

      <div className="showingAllProcess">
        <div className="counterItem">
          <Button btnData={"-"} handleClick={decrement} />
          <span>{counter}</span>
          <Button btnData={"+"} handleClick={increment} />
        </div>
        <div className="deleteItem">
          <img src={Delete} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default RightShoppingCounter;
