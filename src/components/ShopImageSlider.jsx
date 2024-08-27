import React from "react";
import shopImage1 from "../images/shop-img1.jpg";
import shopImage2 from "../images/shop-img-2.jpg";
import Slider from "react-slick";

const ShopImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rounded-lg ">
      <Slider {...settings}>
        <img src={shopImage1} alt="img1" className="rounded-lg " />
        <img src={shopImage2} alt="img2" className="rounded-lg" />
      </Slider>
    </div>
  );
};

export default ShopImageSlider;
