import Basket from "../../../assets/icons/header/shopping-cart.svg";
import User from "../../../assets/icons/header/user.svg";

import styles from  "./IconsForRight.module.scss";

const IconsForRight = () => {
  return (
   <ul className={styles.icons}>
      <li className={styles.basket}>
        <img src={Basket} alt="basket" />
      </li>
      <li className={styles.line}></li>
      <li className={styles.person}>
        <img src={User} alt="user" />
      </li>
    </ul>
  );
};

export default IconsForRight;
