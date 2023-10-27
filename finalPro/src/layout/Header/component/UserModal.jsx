import "./userModal.scss";
import Person from "../../../assets/icons/header/userImg.svg";
import BalanceLenny from "../../../assets/icons/header/moneys.svg";
import CoinLenny from "../../../assets/icons/header/coin.svg";
import Purchase from "../../../assets/icons/header/purchase.svg";
import HeartPerson from "../../../assets/icons/header/heartPerson.svg";
import Settings from "../../../assets/icons/header/settins.svg";
import SignOut from "../../../assets/icons/header/logout.svg";

import ThreeElements from "../../../components/ThreeElements";
import { useSelector,useDispatch } from "react-redux";
import { signOutAct } from "../../../redux/reducers/auth";
import React from "react";
import { signOutUserDatas } from "../../../redux/reducers/cardReducer";
const UserModal = () => {
  const { userDatas } = useSelector((state) => state.auth);
  console.log(userDatas)

// Sign Out
const modalRef = React.useRef(null);
const dispatch = useDispatch()
function SignOutUser(){
    dispatch(signOutAct())
    dispatch(signOutUserDatas())
    //modalRef.current.style.display="none"
    modalRef.current.classList.toggle("showUserPersonModal")
}

  return (
    <div className="UserModal" ref={modalRef} >
      <div className="innerUserModal">
        <div className="forUserInformation">
          <ThreeElements
            image={Person}
            dataCreator={[`${userDatas.username}`, "Platinum Member"]}
          />
        </div>

        <div className="lineForbridge"></div>

        <div className="WalletInformation forAllItems">
          <h4 className="titleOfBP">Wallet</h4>

          <div className="catchAllBalanceInformation">
            <div className="balanceSide">
              <div className="balanceLeft">
                <ThreeElements
                  image={BalanceLenny}
                  dataCreator={["Lenny Balance"]}
                />
              </div>
              <div className="rightResult">
                <p>$928.28</p>
              </div>
            </div>
            <div className="balanceSide">
              <div className="balanceLeft">
                <ThreeElements
                  image={CoinLenny}
                  dataCreator={["Lenny Coins"]}
                />
              </div>
              <div className="rightResult">
                <p>0.092</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lineForbridge"></div>

        <div className="menuPersonInfo forAllItems">
          <h4 className="titleOfBP">Menu</h4>

          <div className="catchAllMenuItems">
            <div className="menuItem">
              <ThreeElements image={Purchase} dataCreator={["Purchase"]} />
            </div>
            <div className="menuItem">
              <ThreeElements image={HeartPerson} dataCreator={["Wishlist"]} />
            </div>
            <div className="menuItem">
              <ThreeElements image={Settings} dataCreator={["Settings"]} />
            </div>
          </div>
        </div>

        <div className="lineForbridge"></div>

        <div className="SignOutUser forAllItems" onClick={SignOutUser} >
          <ThreeElements image={SignOut} dataCreator={["Sign Out"]} />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
