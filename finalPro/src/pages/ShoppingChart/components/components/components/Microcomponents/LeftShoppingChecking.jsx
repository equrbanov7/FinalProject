/* eslint-disable react/prop-types */
import ThreeElements from "../../../../../../components/ThreeElements";
import "./leftShoppingChecking.scss";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck } from "../../../../../../redux/reducers/cardReducer";

// eslint-disable-next-line react/prop-types
const LeftShoppingChecking = ({ productInfo, priceCount,productCheck }) => {
  // const {count} =useSelector((state)=> state.selectedProducts)
  // console.log(count,"summaryy")
  const dispatch = useDispatch();
  const dataExm = [productInfo.attributes.title, productInfo.attributes.color];

  const dataPrice = [`$${productInfo.attributes.price * priceCount}`];
  const navigation = useNavigate();
  function catchId(idx) {
    navigation(`/productdetail/${idx}`);

    //  console.log(idx)
  }
  
  const { exampleIdCount } = useSelector((state) => state.selectedProducts);

  const handleCheckboxChange = (id) => {
    const updatedExampleIdCount = exampleIdCount.map((item) => {
      if (item.id == id) {
      
        return {
          ...item,
          checking: !item.checking,
        };
      }
      return item;
    });
    //console.log('Updated exampleIdCount:', updatedExampleIdCount);
  
    // Dispatch the updated array
    dispatch(toggleCheck(updatedExampleIdCount));
  
    // Add your event handling logic here
    // console.log("Checkbox clicked", id);
  };

  
  
  
  
  
  

  return (
    <div className="LeftShoppingChecking">
      <form>
        <Checkbox
         checked={productCheck}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          onChange={() => handleCheckboxChange(productInfo.id)}
        />
      </form>
      <ThreeElements
        image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
          productInfo?.attributes?.images?.data[0]?.attributes?.url
        }`}
        dataCreator={dataExm}
        dataBottom={dataPrice}
        handleId={() => catchId(productInfo.id)}
      />
    </div>
  );
};

export default LeftShoppingChecking;
