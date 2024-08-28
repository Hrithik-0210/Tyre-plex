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
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Slide change interval in milliseconds
  };
  return (
    <div className="rounded-lg">
      <Slider {...settings}>
        <img src={shopImage1} alt="img1" className="rounded-lg w-64 h-52 " />
        <img src={shopImage2} alt="img2" className="rounded-lg w-64 h-52" />
      </Slider>
    </div>
  );
};

export default ShopImageSlider;
