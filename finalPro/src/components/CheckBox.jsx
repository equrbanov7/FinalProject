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
    const { value,checked } = event.target; //color, category
    let lowerValue = value.toLowerCase();
    console.log(checked,"checkkk")
    if (lowerValue == "category") {
      //  console.log(lowerValue,"llll")
      lowerValue = "type";
    
      dispatch(setObjFilter({ name: "type", value: name }));
      dispatch(setObjFilter({ name: "id", value: ctgId }));
      
      //console.log(name,lowerValue,ctgId)
    
    } else if (lowerValue == "color") {
      if(checked){
        dispatch(setObjFilter({name:"color", value:name }))
      }
      else{
        dispatch(setObjFilter({name:"color", value:"" }))
      }
      
     // console.log("reng", name, lowerValue);
    }
   
  }
  //console.log(filterObj,"ctgg");

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
