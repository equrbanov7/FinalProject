import Basket from "../../../assets/icons/header/shopping-cart.svg";
import User from "../../../assets/icons/header/user.svg";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { useDispatch,useSelector } from "react-redux";
import {useNavigate } from 'react-router-dom'
import { getSelectedProducts } from "../../../redux/actions/cardAction";
import  "./IconsForRight.scss";
import React from "react";
const IconsForRight = () => {
  const navigation = useNavigate()

   const dispatch = useDispatch();
  const { productIds } = useSelector((state) => state.selectedProducts);
 // console.log(productIds.length, "iddddd");
 const uniqueItems = [...new Set(productIds)];


 //console.log(uniqueItems,"unikkk");
  
    React.useEffect(()=>{
      dispatch(getSelectedProducts(productIds))
    },[dispatch, productIds])

    function getElements(){
      
      navigation(`/shoppingChart`)
     // console.log("baskettt",productIds)
    }

 
  

  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      right: 10,
      top: 7,
      padding: '5px',
      borderRadius: '30px', // Use quotes for property values
      border: '1.5px solid var(--white-general, #FFF)', // Use quotes for property values
      background: 'var(--red-1, #E04124)', // Use quotes for property values
    },
  }));

  function showSign() {
    const showingElement = document.querySelector(".SignUpIn");
    console.log(showingElement)
     showingElement.classList.toggle("signUpInShowing");
    // // console.log(showingElement,"aaaaaaaaaaaaaa")
     const overlayElm = document.querySelector(".ovarley");
     overlayElm.classList.toggle("changeOpacity")
  }

  return (
    <ul className="icons">
      <li className="basket" onClick={getElements} >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={uniqueItems.length>1?uniqueItems.length-1 :0  } color="secondary"> {/* Gelecek cardlarr  */ }
          <img src={Basket} alt="icon" />
          </StyledBadge>
        </IconButton>
      </li>
      <li className="line"></li>
      <li className="person" onClick={showSign}>
        <img src={User} alt="user" />
      </li>
    </ul>
  );
};

export default IconsForRight;
