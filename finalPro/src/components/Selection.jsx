import styles from "./selection.module.scss";
import SearchIcon from "../assets/icons/header/search-normal.svg";

const Selection = (data) => {
  //console.log(data.data);
  return (
    <div>
      <form className={styles.formCategory} >
        <select className={styles.select}>
          <option value="all">{data.data.title}</option>
          {data.data.elements.map((element, index) => (
            <option key={index} value={element.toLowerCase()}>
              {element}
            </option>
          ))}
        </select>

        <div className={styles.serachIcon}>
          <img src={SearchIcon} alt="searchingicon" />
        </div>
      </form>
    </div>
  );
};

export default Selection;
