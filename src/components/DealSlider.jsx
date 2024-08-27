import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tireCompanyNames = [
  "Michelin",
  "Bridgestone",
  "Continental",
  "Goodyear",
  "Dunlop",
  "Pirelli",
  "Hankook",
  "Sumitomo Rubber Industries",
  "Maxxis",
  "Cooper Tire & Rubber Company",
  "Yokohama Rubber",
  "Nexen Tire",
  "Sailun",
  "Linglong Tire",
  "Sentury Tire",
];

const DealSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="tire-company-list  my-2">
      <Slider {...settings}>
        {tireCompanyNames.map((company, index) => (
          <div className="border flex justify-center items-center">
            <p className="text-center">{company}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DealSlider;
