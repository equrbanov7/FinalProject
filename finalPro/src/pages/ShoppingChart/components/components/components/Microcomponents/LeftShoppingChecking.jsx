/* eslint-disable react/prop-types */
import ThreeElements from "../../../../../../components/ThreeElements";
import "./leftShoppingChecking.scss";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

// eslint-disable-next-line react/prop-types
const LeftShoppingChecking = ({ productInfo }) => {
  //console.log(productInfo.attributes.images.data[0].attributes.url,"-------")
  const dataExm = [productInfo.attributes.title, productInfo.attributes.color];
  //  console.log(dataExm,"aaaa")
  //  const dataTop=["Logitech G435 Gaming Headset","Central Jakarta"]
  const dataPrice = [`$${productInfo.attributes.price}`];
  const navigation = useNavigate();
  function catchId(idx) {
    navigation(`/productdetail/${idx}`);
      
   //  console.log(idx)
  }

  return (
    <div className="LeftShoppingChecking">
      <form>
        <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }} />
      </form>
      <ThreeElements
        image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
          productInfo?.attributes?.images?.data[0]?.attributes?.url
        }`}
        dataCreator={dataExm}
        dataBottom={dataPrice}
         handleId={()=>catchId(productInfo.id)}
      />
    </div>
  );
};

export default LeftShoppingChecking;
