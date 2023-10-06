import TitleDescription from "../../../../components/TitleDescription";
import CatchAllSides from "./components/CatchAllSides";
import "./detailProduct.scss";

const DetailProduct = () => {
  return (
    <section className="detailProductCatch">
      <TitleDescription
        title={"G502 X Lightspeed WirelessGaming Mouse"}
        desc={
          "G502 X LIGHTSPEED is the latest addition to legendary G502 lineage. Featuring our first-ever LIGHTFORCE hybrid optical-mechanical switches and updated LIGHTSPEED wireless protocol with 68% faster response rate."
        }
        
      />
      <CatchAllSides />
    </section>
  );
};

export default DetailProduct;
