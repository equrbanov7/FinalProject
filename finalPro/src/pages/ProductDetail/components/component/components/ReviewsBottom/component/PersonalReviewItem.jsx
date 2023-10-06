import ThreeElements from "../../../../../../../components/ThreeElements"
import TitleDescription from "../../../../../../../components/TitleDescription"
import "./personalReviewItem.scss"

// import Person from "../../../../../../../assets/images/people/Man_1.png"
import Star from "../../../../../../../assets/icons/pages/Home/star.png"
import Like from "../../../../../../../assets/icons/pages/detail product/likeGreen.svg"
import DisLike from "../../../../../../../assets/icons/pages/detail product/disLike.svg"
import ButtonImg from "../../../../../../../components/ButtonImg"


// eslint-disable-next-line react/prop-types
const PersonalReviewItem = ({Review, Date, Name, ImagePerson}) => {
    const data= [Name]
  return (
    <div className="PersonalReviewItem">
        <div className="leftPersonalReview">
            <div className="starsLike">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
            </div>
            <TitleDescription title={Review} desc={Date} />
            <ThreeElements dataCreator={data} image={ImagePerson}/>
        </div>
        <div className="rightLikeDislikeBtns">
                <div className="btnes">
                    <ButtonImg image={Like} name={128} />
                    <ButtonImg image={DisLike} name={8} />
                </div>
        </div>
    </div>
  )
}

export default PersonalReviewItem