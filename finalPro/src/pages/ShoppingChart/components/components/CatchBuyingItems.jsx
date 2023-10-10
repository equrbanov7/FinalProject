import "./catchBuyingItems.scss"
import ThreeElements from "../../../../components/ThreeElements"

import LogiTechC from "../../../../assets/icons/pages/search/LogiTechC.svg"
import ShoppingCardItem from "./components/ShoppingCardItem"

const CatchBuyingItems = () => {

    const data =["Logitech Indonesia","Central Jakarta"]

  return (
    <div className="CatchBuyingItems">
            <div className="nameOfcompany">
                <ThreeElements image={LogiTechC}dataCreator={data}  />
            </div>

            <div className="selectingItemsOfProducts">
              <ShoppingCardItem />
            </div>
    </div>
  )
}

export default CatchBuyingItems