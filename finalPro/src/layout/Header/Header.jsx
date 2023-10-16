//Images
import Logo from "../../assets/icons/header/Logo.svg";
import IconsForRight from "./component/IconsForRight";
import Search from "./component/Search";

import { Link } from "react-router-dom";
//Style
import styles from "./header.module.scss";

const Header = () => {
 

 

  return (
    <header>
      <div className={styles.container}>
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
    </header>
  );
};

export default Header;
