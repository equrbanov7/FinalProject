/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBox from "../../../components/CheckBox";

import Star from "../../../assets/icons/pages/Home/star.png";
import "./filterSide.scss";
import CheckBoxPrice from "../../../components/CheckBoxPrice";
import PriceRange from "./components/PriceRange";
import { useDispatch, useSelector } from "react-redux";
import { setObjFilter } from "../../../redux/reducers/categoryReducer";

// eslint-disable-next-line react/prop-types
const FilterSide = ({ title, dataFilter, priceActivate }) => {
  const dispatch = useDispatch();
  const { filterObj } = useSelector((state) => state.categories);
  // Define a function to handle the selection
  // For constant price
  const handlePriceRangeSelection = (event) => {
    const parts = event.target.innerHTML.split(" - ");
    const startNumber = parseInt(parts[0].replace("$", ""), 10);
    const endNumber = parseInt(parts[1].replace("$", ""), 10);

    dispatch(setObjFilter({ name: "price", value: [startNumber, endNumber] }));

    // console.log(startNumber, endNumber, "clickk");
  };



  const handleChangePrice = (value, purpose) => {
   
    dispatch(
      setObjFilter({
        name: "price",
        value: [
          purpose === "Minimum price" ? value : filterObj.price[0],
          purpose === "Maximum price" ? value : filterObj.price[1],
        ],
      })
    );
  };
  return (
    <div className="catchFilterAll">
      <div className="nameOfTitle">
        <h2>{title}</h2>
      </div>

      <div className="lineBlockFlter"></div>
      <div className="FilterOptions">
        {dataFilter.map((filterCtg, index) => (
          <>
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="spesfikInfoTitle">
                  {filterCtg.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails key={index}>
                <Typography>
                  <div className="CatchCheckBoxes">
                    {filterCtg.elements.map((filterElm) => (
                      <>
                        <CheckBox
                          img={filterElm.star ? Star : ""}
                          name={filterElm.name}
                          value={filterCtg.title}
                          ctgId={filterElm.id}
                        />
                      </>
                    ))}
                    {filterCtg.show && (
                      <div className="ShowAll">
                        <p>{filterCtg.show}</p>
                      </div>
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="lineBlockFlter"></div>
          </>
        ))}

        {/*For Price       */}
        {priceActivate && (
          <>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="spesfikInfoTitle">
                  Price Range
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="CatchCheckBoxes">
                    <CheckBoxPrice
                      purpose={"Minimum price"}
                      onInputChange={handleChangePrice}
                    />

                    <CheckBoxPrice
                      purpose={"Maximum price"}
                      onInputChange={handleChangePrice}
                    />
                    <PriceRange
                      start={"0"}
                      stop={"200"}
                      handleClick={handlePriceRangeSelection}
                    />
                    <PriceRange
                      start={"200"}
                      stop={"500"}
                      handleClick={handlePriceRangeSelection}
                    />
                    <PriceRange
                      start={"500"}
                      stop={"1500"}
                      handleClick={handlePriceRangeSelection}
                    />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="lineBlockFlter"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterSide;
