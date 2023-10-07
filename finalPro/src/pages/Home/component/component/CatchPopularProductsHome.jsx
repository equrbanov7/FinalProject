/* eslint-disable react/prop-types */
import React from "react";
// import CardItem from "../../../../components/CardItem";
import { getProducts } from "../../../../api/products";
import "./catchPopularProductsHome.scss"
import NewCarditem from "../../../../components/NewCarditem";


const CatchPopularProductsHome = ({count}) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function getAllProducts() {
      const obj  = {limit:count , start:0}
      const data = await getProducts(obj);

      setProducts(data);
      // console.log(data, "++++")
    }
    getAllProducts();
  }, [count]);
  return (
    <div className="catchPopularProducts">
      {products?.data?.map(({ id, attributes }) => {
        return (
          
         
          <NewCarditem
            key={id}
            title={attributes.title}
            desc={attributes.description}
            rating={attributes.rating}
            price={attributes.price}
            image={`${import.meta.env.VITE_UPLOAD_IMAGE}${attributes?.images?.data[0].attributes.url}`}
          />
        );
      })}
    </div>
  );
};

export default CatchPopularProductsHome;
