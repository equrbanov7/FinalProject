/* eslint-disable react/prop-types */
import React from "react";
import { getOneCategory } from "../../../redux/actions/categoryAction";
import { getProducts } from "../../../redux/actions/productAction";
//Material Ui
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
//import { getProducts } from "../../../api/products";
// import CardItem from "../../../components/CardItem";
import "./filteredProducts.scss";
import NewCarditem from "../../../components/NewCarditem";

const FilteredProducts = ({ searchId }) => {
  
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { oneCategory } = useSelector((state) => state.categories);

  

  React.useEffect(() => {
    if (searchId) {
      dispatch(getOneCategory(searchId));
      } else {
      dispatch(getProducts(12));
      // getAllProducts();
      // dispatch(getProducts(12));
    }
  }, [dispatch, searchId]); 


  console.log(oneCategory.data, 'uiiiiiiiElm');

  
  return (
    <div className="allElementsinSearch">
      <div className="catchFilteredPro">
        {searchId
          ? oneCategory?.data?.map(
              ({ id, attributes }) => {

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
                )
                }
            )
          : products?.data?.map(({ id, attributes }) => (
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
            ))}
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
