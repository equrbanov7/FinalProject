/* eslint-disable react/prop-types */
import Star from "../assets/icons/pages/Home/star.png";
import Heart from "../assets/icons/pages/Home/heart.png";
import TitleDescription from "./TitleDescription";
import "./newCarditem.scss"

const NewCarditem = ({ image, title, desc, price, rating }) => {
  return (
    <div className="cathcCardComp">
      <div className="topSide">
        <div className="imgCatch">
          <img src={image} alt="product" />
        </div>
      </div>
      <div className="bottomSide">
        <div className="leftProductInfos">
          <TitleDescription
            title={title}
            // eslint-disable-next-line react/prop-types
            desc={desc?.slice(0, 12)}
          />

          <div className="rating">
            <div className="starSide">
              <img src={Star} alt="star" />
              <span>{rating}</span>
            </div>
            <p className="soldCount">1,238 Sold</p>
          </div>
        </div>
        <div className="rightPrice">
          <h4>{`$${price}`}</h4>
        </div>
      </div>

      <div className="wishIcon">
        <img src={Heart} alt="heart" />
      </div>
    </div>
  );
};

export default NewCarditem;
