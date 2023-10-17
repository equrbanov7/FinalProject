/* eslint-disable react/prop-types */
import React from "react";
import { getOneCategory } from "../../../redux/actions/categoryAction";
import { getProducts } from "../../../redux/actions/productAction";
//Material Ui
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

import {useNavigate } from 'react-router-dom'

import "./filteredProducts.scss";
import NewCarditem from "../../../components/NewCarditem";

const FilteredProducts = ({ searchId }) => {

  const navigation =useNavigate();
  
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { oneCategory } = useSelector((state) => state.categories);

  

  function catchId(idx){
    navigation(`/productdetail/${idx}`)
   // console.log(idx)
  }

   

  React.useEffect(() => {
    if (searchId) {
      dispatch(getOneCategory(searchId));
      } else {
      dispatch(getProducts(12));
      // getAllProducts();
      // dispatch(getProducts(12));
    }
  }, [dispatch, searchId]); 


 // console.log(oneCategory.data, 'uiiiiiiiElm');

  
  return (
    <div className="allElementsinSearch">
      <div className="catchFilteredPro">
        {searchId
          ? oneCategory?.data?.map(
              ({ id, attributes }) => {
                let truncatedTitle = attributes.title;

                if (window.innerWidth > 778 && window.innerWidth <= 1024) {
                  // Apply truncation logic for screen width less than or equal to 1024 pixels.
                  truncatedTitle = attributes.title.slice(0, 23) + "...";
                 // console.log("1178")
                } else if (window.innerWidth <= 778) {
                  // Apply truncation logic for screen width less than or equal to 778 pixels.
                  truncatedTitle = attributes.title.slice(0, 15) + "...";
                  //console.log("778")
                }
                 else if (window.innerWidth <= 572) {
                  // Apply truncation logic for screen width less than or equal to 778 pixels.
                  truncatedTitle = attributes.title.slice(0, 10) + "...";
                  //console.log("778")
                }
                return (
                <NewCarditem
                  key={id}
                  title={truncatedTitle}
                  desc={attributes.description}
                  rating={attributes.rating}
                  price={attributes.price}
                  image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
                    attributes?.images?.data[0].attributes.url
                  }`}
                  handleId={()=> catchId(id)}
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
