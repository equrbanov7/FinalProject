/* eslint-disable react/prop-types */
import React from "react";
import {
  // getOneCategory,
  getProductsByCategoryId,
} from "../../../redux/actions/categoryAction";
import { getProducts } from "../../../redux/actions/productAction";
//Material Ui
//import Pagination from "@mui/material/Pagination";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import "./filteredProducts.scss";
import NewCarditem from "../../../components/NewCarditem";
import LoadingItems from "../../../components/LoadingItems";
import { setObjFilter } from "../../../redux/reducers/categoryReducer";

const FilteredProducts = ({ searchId }) => {
  const [page, setPage] = React.useState(1);
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { oneCategory, filterObj } = useSelector((state) => state.categories);

  const { loading } = useSelector((state) => state.categories);

  //console.log(oneCategory.data[0].attributes.categories.data[0].id, "aaaaaaa");

  function catchId(idx, ctg, name, ctgId) {
    //navigation(`/productdetail/${idx}`);
    navigation(`/${ctg}/${ctgId}/${name}/${idx}`);

    // console.log(ctgId)
  }

  React.useEffect(() => {
    if (searchId) {
      dispatch(setObjFilter({ name: "page", value: page }));
     // dispatch(getOneCategory(searchId));
      dispatch(getProductsByCategoryId({ ...filterObj, id: searchId }));
    } else {
      dispatch(getProducts(12));
      // getAllProducts();
      // dispatch(getProducts(12));
    }
  }, [dispatch, filterObj, page, searchId]);

  // console.log(oneCategory.data.attributes, 'uiiiiiiiElm');

  // Pagination

  function handlePagination(e, p) {
    setPage(p);
    //console.log(p, "safdasf")
  }
  console.log(oneCategory, "oneee");

  return (
    <div className="allElementsinSearch">
      {loading ? (
        // Show loading state while data is being fetched
        <LoadingItems loading={loading} size={40} />
      ) : (
        <>
          <div className="catchFilteredPro">
            {searchId
              ? oneCategory?.data?.map(({ id, attributes }) => {
                  let truncatedTitle = attributes.title;

                  if (window.innerWidth > 778 && window.innerWidth <= 1024) {
                    // Apply truncation logic for screen width less than or equal to 1024 pixels.
                    truncatedTitle = attributes.title.slice(0, 23) + "...";
                    // console.log("1178")
                  } else if (window.innerWidth <= 778) {
                    // Apply truncation logic for screen width less than or equal to 778 pixels.
                    truncatedTitle = attributes.title.slice(0, 15) + "...";
                    //console.log("778")
                  } else if (window.innerWidth <= 572) {
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
                      handleId={() =>
                        catchId(
                          id,
                          attributes?.categories?.data[0]?.attributes?.title,
                          attributes.title,
                          attributes?.categories?.data[0]?.id
                        )
                      }
                    />
                  );
                })
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
              <Pagination
                onChange={handlePagination}
                count={oneCategory?.meta?.pagination?.pageCount}
                variant="outlined"
                shape="rounded"
                page={page}
              /> 
            </Stack>
          </div>
        </>
      )}
    </div>
  );
};

export default FilteredProducts;
