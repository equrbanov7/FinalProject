import CatchBothSidesTop from "./components/CatchBothSidesTop";
import ProductMenu from "./components/ProductMenu";
import "./productDetail.scss";
//import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  // console.log(id, "catchhhhh")


  return (
    <div className="forSpesficClass">
      <div className="my-SpesficContainer my-Margin-container">
        <CatchBothSidesTop searchId={id} />
        <ProductMenu catchId={id} />
       
      </div>
    </div>
  );
};

export default ProductsDetail;
