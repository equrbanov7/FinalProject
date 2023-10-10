import ThreeElements from "../../../../../../components/ThreeElements";
import "./leftShoppingChecking.scss"

import Checkbox from "@mui/material/Checkbox";
import Example from "../../../../../../assets/images/shirtgreen.png"

const LeftShoppingChecking = () => {

    const dataTop=["Logitech G435 Gaming Headset","Central Jakarta"]
    const dataPrice=[`$${280}`]
  return (
    <div className="LeftShoppingChecking">
        <form>
        <Checkbox
         
         sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
       />
        </form>
        <ThreeElements image={Example} dataCreator={dataTop} dataBottom={dataPrice} />
    </div>
  )
}

export default LeftShoppingChecking