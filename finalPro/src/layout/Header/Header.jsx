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

import { useForm } from "react-hook-form";


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



  //console.log(userDatas)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
  
    console.log(data)
    
  };
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/*Username  */}  
                  <div className="nameSidef allInput ">
                    <label htmlFor="username">Name</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter your name"
                      {...register("username", { required: true })}
                    />
                    {errors.username?.type === "required" && (
                      <span className="errorMessageInput">
                        Username is required
                      </span>
                    )}
                  </div>

                  {/*Email or Phone   */}
                  <div className="emailOrPhoneside allInput">
                    <label htmlFor="email">Phone Number or Email</label>
                    <input
                      type="text" // Use type="text to allow both email and phone number
                      id="email"
                      name="email"
                      placeholder="Enter your phone number or email"
                      {...register("email", {
                        required: "Email or phone number is required",
                        pattern: {
                          value: /^(?:\+\d{3}\d{9}|\S+@\S+\.\S+)$/,
                          message:
                            "Invalid format. Enter a valid phone number with the country code (+994) or a valid email address.",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="errorMessageInput">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/*Password   */}
                  <div className="passwordSide allInput">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="on"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        // You can add more validation rules here
                      })}
                    />
                    {errors.password && (
                      <span className="errorMessageInput">
                        {errors.password.message}
                      </span>
                    )}
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
                  {/*Email or Phone   */}
                  <div className="emailOrPhoneside allInput">
                    <label htmlFor="email">Phone Number or Email</label>
                    <input
                      type="text" // Use type="text to allow both email and phone number
                      id="email"
                      name="email"
                      placeholder="Enter your phone number or email"
                      {...register("email", {
                        required: "Email or phone number is required",
                        pattern: {
                          value: /^(?:\+\d{3}\d{9}|\S+@\S+\.\S+)$/,
                          message:
                            "Invalid format. Enter a valid phone number with the country code (+994) or a valid email address.",
                        },
                      })}
                    />
                    {errors.EmailOrPhone && (
                      <span className="errorMessageInput">
                        {errors.EmailOrPhone.message}
                      </span>
                    )}
                  </div>

                  {/*Password   */}
                  <div className="passwordSide allInput">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="on"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        // You can add more validation rules here
                      })}
                    />
                    {errors.password && (
                      <span className="errorMessageInput">
                        {errors.password.message}
                      </span>
                    )}
                    <span className="troubleAsking" onClick={handleClick}>
                      Don't you have an account?
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
