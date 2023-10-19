import React from "react";

import "./relatedProducts.scss";
import TitleItem from "./TitleItem";
import { getProducts } from "../api/products";
import NewCarditem from "./NewCarditem";

const RelatedProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function getAllProducts() {
      const obj = { limit: 4, start: 0 };
      const data = await getProducts(obj);

      setProducts(data);
      // console.log(data, "++++")
    }
    getAllProducts();
  }, []);
  return (
    <>
      <div className="RelatedProducts my-SpesficContainer ">
        <TitleItem titleInfo={"Related Product"} btnInfo={"View Detail"} />
        <div className="catchRelatedProductUniversal">
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
      </div>
    </>
  );
};

export default RelatedProducts;
