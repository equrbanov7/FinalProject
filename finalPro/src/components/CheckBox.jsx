import Star from "../assets/icons/pages/Home/star.png";
import "./checkBox.scss";

import Checkbox from "@mui/material/Checkbox";

// eslint-disable-next-line react/prop-types
const CheckBox = ({ img, name }) => {
  return (
    <div className="catchFormCheck">
      <form>
        {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> */}
        <Checkbox
         
          sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
        />
        {img ? <img src={Star} alt="star" /> : ""}
        <label htmlFor="vehicle1">{name} </label>
      </form>
    </div>
  );
};

export default CheckBox;
