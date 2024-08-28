import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Michelin from "../images/companyLogo/Michelin.png";
import Bridgestone from "../images/companyLogo/bridgestone.png";
import Goodyear from "../images/companyLogo/goodyear.png";
import CooperTire from "../images/companyLogo/Cooper Tire.png";
import Yokohama from "../images/companyLogo/Yokohama.png";
import Nexen from "../images/companyLogo/Nexen.png";
import CEAT from "../images/companyLogo/ceat.png";
import MRF from "../images/companyLogo/MRF-Logo.png";
import TVS from "../images/companyLogo/tvs.png";

const tireCompanies = [
  { name: "Michelin", logo: Michelin },
  { name: "Bridgestone", logo: Bridgestone },
  { name: "Goodyear", logo: Goodyear },
  { name: "Cooper Tire", logo: CooperTire },
  { name: "Yokohama Rubber", logo: Yokohama },
  { name: "Nexen Tire", logo: Nexen },
  { name: "CEAT", logo: CEAT },
  { name: "MRF", logo: MRF },
  { name: "TVS TYRES", logo: TVS },
];
const DealSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Slide change interval in milliseconds
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
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
        {tireCompanies.map((company, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="deals-main-container mx-4 my-3  p-2 rounded-lg h-full border ">
              <div className="logo-img-container w-[70%] h-12 mx-auto flex items-center justify-center rounded-md">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full rounded"
                />
              </div>
              <p className="flex place-items-end my-5 justify-center text-sm text-gray-500 font-medium ">
                {company.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DealSlider;
