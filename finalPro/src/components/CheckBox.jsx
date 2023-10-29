/* eslint-disable react/prop-types */
import Star from "../assets/icons/pages/Home/star.png";
import "./checkBox.scss";

import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { controlChecked, setObjFilter } from "../redux/reducers/categoryReducer";


// eslint-disable-next-line react/prop-types
const CheckBox = ({ img, name, value,ctgId,checking }) => {
  //const { filterObj,checkFilterControl } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
 

  function checkEdValue(event) {
    const { value,checked } = event.target; //color, category
    let lowerValue = value.toLowerCase();
   // console.log(value,"checkkk")
    if (lowerValue == "category") {
      //  console.log(lowerValue,"llll")
      lowerValue = "type";
 

      
      dispatch(setObjFilter({ name: "type", value: name }));
      dispatch(setObjFilter({ name: "id", value: ctgId }));
      
      //console.log(name,"fff")
    
    }
     else if (lowerValue == "color") {

    
     // console.log(value,name,checked)
      const controlPayload = {
        checkedName: name,
        checking: checked,
      };
    
      dispatch(setObjFilter({ name: "color", value: checked ? name : "" }));
      dispatch(controlChecked(controlPayload));
     
    }else if(value == "Best Filter" && name ==="4 stars or upper"  ){
     // console.log(name,"clickk")
     
      const controlPayload = {
        checkedName: name,
        checking: checked,
      };
      dispatch(setObjFilter({ name: "rating", value: checked ? 4 : "" }));
      dispatch(controlChecked(controlPayload));
     
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
           checked={checking}
        />
        {img ? <img src={Star} alt="star" /> : ""}
        <label htmlFor="vehicle1">{name} </label>
      </form>
    </div>
  );
};

export default CheckBox;
