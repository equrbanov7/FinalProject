import React from "react";
import SliderItem from "../../../../components/SliderItem";
import "./catchFeaturedSliderItems.scss";
//import { getCategories } from "../../../../api/categories";
import {useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { getCategories } from "../../../../redux/actions/categoryAction";

const CatchFeaturedSliderItems = () => {
   const navigation = useNavigate()
  const {categories}=useSelector((state)=>state.categories)

  const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(getCategories());

  }, [dispatch]);


  // const dispatchOneItem = useDispatch();
  //   React.useEffect(() => {
  //     dispatchOneItem(getOneCategory(1));

  // }, [dispatchOneItem]);

  React.useEffect(()=>{
    

  },[])
  function catchId(idx){
    console.log(idx) 
    navigation(`/search/${idx}`)
  } 

  //console.log(categories,"++++")
  // const [categories, setCategories] = React.useState([]);
 
  // React.useEffect(() => {
  //   async function getAllCategories() {
  //     const data = await getCategories();

  //     setCategories(data);
  //     // console.log(data, "++++")
  //   }
  //   getAllCategories();
  // }, []);
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
            handleId={() => catchId(id)}
          />
        );
      })}
    </div>
  );
};

export default CatchFeaturedSliderItems;
