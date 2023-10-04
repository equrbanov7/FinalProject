import React from "react";
import SliderItem from "../../../../components/SliderItem";
import "./catchFeaturedSliderItems.scss";
import { getCategories } from "../../../../api/categories";

const CatchFeaturedSliderItems = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    async function getAllCategories() {
      const data = await getCategories();

      setCategories(data);
      // console.log(data, "++++")
    }
    getAllCategories();
  }, []);
  return (
    <div className="slideriTemsCatch">
      {categories?.data?.map(({ id, attributes }) => {
        return (
          <SliderItem
            key={id}
            title={attributes.title}
            image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
              attributes.img.data.attributes.url
            }`}
          />
        );
      })}
    </div>
  );
};

export default CatchFeaturedSliderItems;
