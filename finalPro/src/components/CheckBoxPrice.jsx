import "./checkBoxPrice.scss";

// eslint-disable-next-line react/prop-types
const CheckBoxPrice = ({purpose}) => {
  return (
    <div className="formCHeckSelect">
      <form className="selectAll">
        <select className="priceSelects">
          <option value="usd">USD</option>
          <option value="azn">AZN</option>
          <option value="tl">TL</option>
        </select>
        <div className="lineSelect">data</div>
        <input type="number"  placeholder={purpose} />
      </form>
    </div>
  );
};

export default CheckBoxPrice;
