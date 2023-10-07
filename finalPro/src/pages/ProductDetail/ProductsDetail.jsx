import CatchBothSidesTop from "./components/CatchBothSidesTop"
import ProductMenu from "./components/ProductMenu"
import "./productDetail.scss"
//import { useSelector, useDispatch } from "react-redux"

const ProductsDetail = () => {
  return (
    <div className="my-SpesficContainer">
     <CatchBothSidesTop />
      <ProductMenu />
    </div>
  )
}

export default ProductsDetail