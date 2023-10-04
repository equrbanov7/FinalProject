//Images
import Logo from "../../assets/icons/header/Logo.svg";
import IconsForRight from "./component/IconsForRight";
import Search from "./component/Search";

//Style
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className="leftLogo">
          <img src={Logo} alt="logo" />
        </div>

        <Search />
        <div className="rightItems">
          <IconsForRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
