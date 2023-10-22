//Images
import Logo from "../../assets/icons/header/Logo.svg";
import IconsForRight from "./component/IconsForRight";
import Search from "./component/Search";

import FacebookIcon from "../../assets/icons/header/Facebook.svg";
import { Link } from "react-router-dom";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
//Style
import "./header.scss";
import SignUpIn from "../../components/SignUpIn";

const Header = () => {
  function closeFilter(){
    
    const showingElement=document.querySelector(".SignUpIn");
    showingElement.classList.remove("signUpInShowing");
    const overlayElm= document.querySelector(".ovarley")
    overlayElm.classList.toggle("changeOpacity")
    
   // console.log("ovarleyyy")
  }
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <div className="leftLogo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <Search />
        <div className="rightItems">
          <IconsForRight />
        </div>
      </div>
      <SignUpIn>
        <div className="signUp">
          <div className="innerSignUp">
            <h1 className="titleOSign">Sign Up</h1>

            <div className="formCatch">
              <form>
                <div className="nameSidef allInput ">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="emailOrPhoneside allInput">
                  <label htmlFor="email">Phone Number or Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your phone number or email"
                  />
                </div>

                <div className="passwordSide allInput">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <span className="troubleAsking">Getting Trouble?</span>
                </div>

                <div className="SubmitButton allInput">
                  <input type="submit" value="Sign Up" />
                </div>
              </form>
            </div>
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
      </SignUpIn>
      <div className="ovarley" onClick={closeFilter}></div>
    </header>
  );
};

export default Header;
