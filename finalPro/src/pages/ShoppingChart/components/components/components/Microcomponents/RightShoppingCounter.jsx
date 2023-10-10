import React from "react"
import "./rightShoppingCounter.scss"
import Delete from "../../../../../../assets/icons/pages/search/trash.svg"
import Button from "../../../../../../components/Button"

const RightShoppingCounter = () => {
    const[counter,setCounter]=React.useState(1)

    function increment() {
    
      setCounter((prevCounter) => prevCounter + 1);
      
    }
    
    function decrement() {
     
      setCounter((prevCounter) => prevCounter - 1);
      if(counter<2){
        confirm("Do you want to delete?")
       }
    }


  return (
    <div className="RightShoppingCounter">
        <div className="counterItem">
          <Button btnData={"-"}  handleClick={decrement}/>
          <span>{counter}</span>
          <Button btnData={"+"}  handleClick={increment}/>
      
        </div>
        <div className="deleteItem">
            <img src={Delete} alt="delete" />
        </div>
    </div>
  )
}

export default RightShoppingCounter