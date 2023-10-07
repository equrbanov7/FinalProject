import ProductImageGallery from "./ProductImageGallery"
import ProductInfoRight from "./ProductInfoRight"
import "./catchBothSidesTop.scss"

const CatchBothSidesTop = () => {
  return (
    <div className="CatchBothSidesTop">
        <ProductImageGallery />
        <ProductInfoRight />
    </div>
  )
}

export default CatchBothSidesTop