import "./buttonImg.scss";

// eslint-disable-next-line react/prop-types
const ButtonImg = ({ image, name }) => {
  return (
    <div className="ButtonImgUniverse">
      <div className="btnCatch" >
        {image ? <img src={image} alt="image" /> : ""}

        <button>{name}</button>
      </div>
    </div>
  );
};

export default ButtonImg;
