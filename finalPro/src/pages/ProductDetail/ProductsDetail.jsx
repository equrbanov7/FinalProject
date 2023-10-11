import CatchBothSidesTop from "./components/CatchBothSidesTop"
import ProductMenu from "./components/ProductMenu"
import "./productDetail.scss"
//import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

const ProductsDetail = () => {
const {id}=useParams();
 // console.log(id, "catchhhhh")

  return (
    <div className="my-SpesficContainer">
     <CatchBothSidesTop searchId={id} />
      <ProductMenu catchId={id} />
    </div>
  )
}

export default ProductsDetail