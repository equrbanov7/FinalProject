/* eslint-disable react/prop-types */
import React from "react";
// import CardItem from "../../../../components/CardItem";
//import { getProducts } from "../../../../api/products";
import "./catchPopularProductsHome.scss";
import NewCarditem from "../../../../components/NewCarditem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions/productAction";
import { useNavigate } from "react-router-dom";



const CatchPopularProductsHome = ({ count }) => {
  const navigation = useNavigate();
  function catchId(idx) {
    navigation(`/productdetail/${idx}`);

    // console.log(idx)
  }
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts(count));
  }, [count, dispatch]);

  return (
    <div className="catchPopularProducts">
      {products?.data?.map(({ id, attributes }) => {
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
            handleId={() => catchId(id)}
          />
        );
      })}
    </div>
  );
};

export default CatchPopularProductsHome;
