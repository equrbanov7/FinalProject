import React from "react";

//Material Ui
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { getProducts } from "../../../api/products";
// import CardItem from "../../../components/CardItem";
import "./filteredProducts.scss";
import NewCarditem from "../../../components/NewCarditem";
const FilteredProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function getAllProducts() {
      const obj = { limit: 12, start: 0 };
      const data = await getProducts(obj);

      setProducts(data);
      // console.log(data, "++++")
    }
    getAllProducts();
  }, []);
  return (
    <div className="allElementsinSearch">
      <div className="catchFilteredPro">
        {products?.data?.map(({ id, attributes }) => {
          return (
            <NewCarditem
              key={id}
              title={attributes.title}
              desc={attributes.description}
              rating={attributes.rating}
              price={attributes.price}
              image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
                attributes?.images?.data[0].attributes.url
              }`}
            />
          );
        })}
      </div>
      <div className="paginationCatch">
        <Stack spacing={2}>
          <Pagination count={3} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
};

export default FilteredProducts;
