import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBox from "../../../components/CheckBox";

import Star from "../../../assets/icons/pages/Home/star.png"
import "./filterSide.scss";
import CheckBoxPrice from "../../../components/CheckBoxPrice";
import PriceRange from "./components/PriceRange";

const FilterSide = () => {
  return (
    <div className="catchFilterAll">
      <div className="nameOfTitle">
        <h2>Filter Option</h2>
      </div>

      <div className="lineBlockFlter"></div>
      <div className="FilterOptions">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="spesfikInfoTitle">Best Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="CatchCheckBoxes">
                <CheckBox img={Star} name={"4 stars or upper"} />
                <CheckBox name={"Same-day delivery"} />
                <CheckBox name={"COD"} />
                <CheckBox name={"Discount"} />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="lineBlockFlter"></div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="spesfikInfoTitle">Location</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="CatchCheckBoxes">
              <CheckBox  name={"Bandung"} />
                <CheckBox name={"Jakarta"} />
                <CheckBox name={"Medan"} />
                <CheckBox name={"Surabaya"} />
                <CheckBox name={"Jogja"} />

                <div className="ShowAll">
                    <p>Show All</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="lineBlockFlter"></div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="spesfikInfoTitle">Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="CatchCheckBoxes">
              <CheckBox  name={"Electronic"} />
                <CheckBox name={"Fashion"} />
                <CheckBox name={"Action Figure"} />
                <CheckBox name={"Book"} />
                <CheckBox name={"Gaming"} />

                <div className="ShowAll">
                    <p>Show All Categories All</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="lineBlockFlter"></div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="spesfikInfoTitle">Price Range</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="CatchCheckBoxes">
                <CheckBoxPrice purpose={"Minimum price"} />
                <CheckBoxPrice purpose={"Maximum price"} />
                <PriceRange start={"0"} stop={"200"} />
                <PriceRange start={"200"} stop={"500"} />
                <PriceRange start={"500"} stop={"1500"} />
                
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="lineBlockFlter"></div>
     
      
      </div>
    </div>
  );
};

export default FilterSide;
