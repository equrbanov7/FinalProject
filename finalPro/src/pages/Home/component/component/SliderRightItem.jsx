// import styles from "./sliderRightItem.module.scss"
import "./sliderRightItem.scss";
import MainImg from "../../../../assets/images/MainImg.png";
// import CardItem from "../../../../components/CardItem";
import SliderImageHome from "../../../../assets/images/shirtgreen.png";
import NewCarditem from "../../../../components/NewCarditem";

const SliderRightItem = () => {
  return (
    <div className="sliderrightCatch">
      <img src={MainImg} alt="image" className="sliderBackImg" />
      <NewCarditem
        title={"Green Jacket V2"}
        desc={"Cimahi, Bandung jkaskfjasfksjl"}
        rating={"4.3"}
        image={SliderImageHome}
        price={20}
      />
    </div>
  );
};

export default SliderRightItem;
