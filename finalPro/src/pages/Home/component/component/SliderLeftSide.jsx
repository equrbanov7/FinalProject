import styles from "./sliderLeftSide.module.scss";

import TitleandBtnes from "../../../../components/TitleandBtnes";

const SliderLeftSide = () => {
  return (
    <div className={styles.leftofSlide}>
     
      <TitleandBtnes
        title={"Upgrade Your Wardrobe With Our Collection"}
        desc={
          "Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est ullamcorper nisl amet non mollis."
        }
        btndatas={["Buy Now","View Detail"]}
      />
    </div>
  );
};

export default SliderLeftSide;
