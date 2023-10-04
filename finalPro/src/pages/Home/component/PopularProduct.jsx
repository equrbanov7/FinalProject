
import Button from "../../../components/Button";
import TitleDescription from "../../../components/TitleDescription";
import CatchPopularProductsHome from "./component/CatchPopularProductsHome";
import "./popularProduct.scss";

const PopularProduct = () => {
  return (
    <div className="catchAllPopularProducts my-SpesficContainer ">
      <TitleDescription
        title={"Popular Product on Lenny"}
        desc={
          "Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in"
        }
      />

      <CatchPopularProductsHome />

        <Button btnData={"Load More"}/>
    </div>
  );
};

export default PopularProduct;
