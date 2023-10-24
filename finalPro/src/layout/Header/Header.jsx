/* eslint-disable react/no-unescaped-entities */
//Images
import Logo from "../../assets/icons/header/Logo.svg";
import IconsForRight from "./component/IconsForRight";
import Search from "./component/Search";
import React from "react";
//import FacebookIcon from "../../assets/icons/header/Facebook.svg";
import { Link } from "react-router-dom";

//Style
import "./header.scss";
import SignUpIn from "../../components/SignUpIn";

//React-Form

import { useForm } from "react-hook-form"

const Header = () => {

  //SignUpIn controllerr
  const [showContent, setShowContent] = React.useState(false);
  const handleClick = () => {
    setShowContent(!showContent);
  };


  //SignUpIn Closingg
  function closeFilter() {
    const showingElement = document.querySelector(".SignUpIn");
    showingElement.classList.remove("signUpInShowing");
    const overlayElm = document.querySelector(".ovarley");
    overlayElm.classList.toggle("changeOpacity");

    // console.log("ovarleyyy")
  }

  //SignUpIn  HookForm Getting Value

  const {register,handleSubmit}=useForm();

    const onSubmit = data => console.log(data)
   // console.log(watch('password'))
  return (
    <header>
      <div className="container">
        <Link to={"/"} className="linkLogo">
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
          {/*Sign Up side  */}
          {showContent ? (
            <>
              <h1 className="titleOSign">Sign Up</h1>

              <div className="formCatch">
                <form  onSubmit={handleSubmit(onSubmit)}>
                  <div className="nameSidef allInput ">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      {...register("username")}
                    />
                  </div>

                  <div className="emailOrPhoneside allInput">
                    <label htmlFor="email">Phone Number or Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your phone number or email"
                      {...register("EmailOrPhone")}
                    />
                  </div>

                  <div className="passwordSide allInput">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      {...register("password")}
                    />
                    <span className="troubleAsking" onClick={handleClick}>
                      Do you have an account?
                    </span>
                  </div>

                  <div className="SubmitButton allInput">
                    <input type="submit" value="Sign Up" />
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              {/*Sign In side  */}
              <h1 className="titleOSign">Sign In</h1>
              <div className="formCatch">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="emailOrPhoneside allInput">
                    <label htmlFor="email">Phone Number or Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your phone number or email"
                      {...register("EmailOrPhone")}
                    />
                  </div>

                  <div className="passwordSide allInput">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      {...register("password")}
                    />
                    <span className="troubleAsking" onClick={handleClick}>
                      Don't have an account?
                    </span>
                  </div>

                  <div className="SubmitButton allInput">
                    <input type="submit" value="Sign In" />
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </SignUpIn>
      <div className="ovarley" onClick={closeFilter}></div>
    </header>
  );
};

export default Header;
