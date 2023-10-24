/* eslint-disable react/prop-types */
import Star from "../assets/icons/pages/Home/star.png";
import "./checkBox.scss";

import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { setObjFilter } from "../redux/reducers/categoryReducer";


// eslint-disable-next-line react/prop-types
const CheckBox = ({ img, name, value,ctgId }) => {
  const { filterObj } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 //console.log(ctgId,"sdas")
 
  // arr.push("a")

  function checkEdValue(event) {
    const { value } = event.target; //color, category
    let lowerValue = value.toLowerCase();

    if (lowerValue == "category") {
      //  console.log(lowerValue,"llll")
      lowerValue = "type";
     // dispatch(setObjFilter({name:"type", value:name, id:"5" }))
      dispatch(setObjFilter({ name: "type", value: name }));
      dispatch(setObjFilter({ name: "id", value: ctgId }));
      
      //console.log(name,lowerValue,ctgId)
    
    } else if (lowerValue == "color") {
      dispatch(setObjFilter({name:"color", value:name }))
     // console.log("reng", name, lowerValue);
    }
    console.log(filterObj,"ctgg");
  }


  return (
    <div className="catchFormCheck">
      <form>
        <Checkbox
          value={value}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          onChange={(event) => checkEdValue(event)}
        />
        {img ? <img src={Star} alt="star" /> : ""}
        <label htmlFor="vehicle1">{name} </label>
      </form>
    </div>
  );
};

export default CheckBox;
