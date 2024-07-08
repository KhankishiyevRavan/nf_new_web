import React from "react";
import "./css/SwiperCover.css";

const SwiperCover = () => {
  return (
    <div id="swiper_cover app">
      <div className="swiper" >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
          
            <img className="swiper-slicer-image" src="/assets/images/cover/kharkov.jpeg" alt="" />
          </div>
          <div className="swiper-slide">
            <img className="swiper-slicer-image" src="/assets/images/cover/istanbul.webp" alt="" />
          </div>
          <div className="swiper-slide">
            <img className="swiper-slicer-image" src="/assets/images/cover/poland.jpg" alt="" />
          </div>
          <div className="swiper-slide">
            <img className="swiper-slicer-image" src="/assets/images/cover/turkiye.png" alt="" />
          </div>
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default SwiperCover;
