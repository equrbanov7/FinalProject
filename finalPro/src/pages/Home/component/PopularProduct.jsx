import React from "react";
import Button from "../../../components/Button";
import TitleDescription from "../../../components/TitleDescription";
import CatchPopularProductsHome from "./component/CatchPopularProductsHome";
import "./popularProduct.scss";

const PopularProduct = () => {
  const [counter,setCounter]= React.useState(8)
  let i=0;
  // let counter=8;
  const loadMore = () =>{
      if(i<2){

        //counter=counter+8
        setCounter( prev => prev+8)
        //console.log(counter)
      }
     i++;
  }

  return (
    <div className="catchAllPopularProducts my-SpesficContainer ">
      <TitleDescription
        title={"Popular Product on Lenny"}
        desc={
          "Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in"
        }
      />

      <CatchPopularProductsHome count={counter} />

        <Button btnData={"Load More"} handleClick={loadMore}/>
    </div>
  );
};

export default PopularProduct;
