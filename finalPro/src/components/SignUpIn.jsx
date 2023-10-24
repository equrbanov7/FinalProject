/* eslint-disable react/prop-types */
import "./signUpIn.scss";
import FacebookIcon from "../assets/icons/header/Facebook.svg";

const SignUpIn = (props) => {
  return (
    <div className="SignUpIn">
      <div className="innerSignUp">
        {props.children}
        <div className="BottomText">
          <div className="line"></div>
          <p>Or using other method</p>
          <div className="line"></div>
        </div>

        <div className="facebookSignUp">
          <div className="ingCatchFb">
            {" "}
            <img src={FacebookIcon} alt="facebookicon" />
          </div>
          <h3 className="facebook">Sign In with Facebook</h3>
        </div>
      </div>
    </div>
  );
};

export default SignUpIn;
