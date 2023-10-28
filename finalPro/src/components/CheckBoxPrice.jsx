import "./checkBoxPrice.scss";
import React from "react";
// eslint-disable-next-line react/prop-types
const CheckBoxPrice = ({ purpose, onInputChange }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onInputChange(inputValue, purpose); // Send the input value to the parent component
  };
  return (
    <div className="formCHeckSelect">
      <form className="selectAll" onSubmit={handleSubmit}>
        <select className="priceSelects">
          <option value="usd">USD</option>
          <option value="azn">AZN</option>
          <option value="tl">TL</option>
        </select>
        <div className="lineSelect">data</div>
        <input
          type="number"
          placeholder={purpose}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="hiddenBtn" type="submit">
          Submit
        </button>{" "}
        {/*Elvin sil bunu none */}
      </form>
    </div>
  );
};

export default CheckBoxPrice;
