// import styles from "./sliderRightItem.module.scss"
import "./sliderRightItem.scss";
import MainImg from "../../../../assets/images/MainImg.png";
// import CardItem from "../../../../components/CardItem";
import SliderImageHome from "../../../../assets/images/shirtgreen.png";
import NewCarditem from "../../../../components/NewCarditem";
import { useNavigate } from "react-router-dom";

const SliderRightItem = () => {

  const navigation = useNavigate();
  function catchId(idx) {
    navigation(`/Fashion/2/shirt/${idx}`);

    // console.log(idx)
  }
  return (
    <div className="sliderrightCatch">
      <img src={MainImg} alt="image" className="sliderBackImg" />

      <div className="newCarditemContainer">
        <NewCarditem
          title={"Green Jacket V2"}
          desc={"Cimahi, Bandung jkaskfjasfksjl"}
          rating={"4.3"}
          image={SliderImageHome}
          price={20}
          handleId={() => catchId(21)}
        />
      </div>
    </div>
  );
};

export default SliderRightItem;
