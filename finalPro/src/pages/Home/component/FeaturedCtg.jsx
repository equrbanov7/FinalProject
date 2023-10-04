// import SliderItem from "../../../../components/SliderItem";
import TitleItem from "../../../components/TitleItem";
import "./featuredCtg.scss";

//Swiper
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper/modules";
import CatchFeaturedSliderItems from "./component/CatchFeaturedSliderItems";

const FeaturedCtg = () => {
  return (
    <div className="FeaturedCtgAll my-SpesficContainer ">
      <TitleItem titleInfo={"Featured Category"} btnInfo={"View Detail"} />
      <div className="featureCtgItems">
        <>
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
                <CatchFeaturedSliderItems />
            </SwiperSlide>
            <SwiperSlide>
                <CatchFeaturedSliderItems />
            </SwiperSlide>
            <SwiperSlide>
                <CatchFeaturedSliderItems />
            </SwiperSlide>
          
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default FeaturedCtg;
