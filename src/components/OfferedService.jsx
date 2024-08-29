import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TyreSales from "../images/ServiceIcons/tyresales.png";
import TyreMaintenance from "../images/ServiceIcons/tyreMaintenance.png";
import TyreBalanace from "../images/ServiceIcons/tyreBalance.png";
import TyreReplacement from "../images/ServiceIcons/tyreReplacement.png";
import WheelAlignment from "../images/ServiceIcons/wheelAlignment.png";

const services = [
  {
    name: "Tyre Sales",
    logo: TyreSales,
  },
  {
    name: "Tyre Maintenance",
    logo: TyreMaintenance,
  },
  {
    name: "Tyre Balance",
    logo: TyreBalanace,
  },
  {
    name: "Wheel Alignment",
    logo: WheelAlignment,
  },
  {
    name: "Tyre Replacement",
    logo: TyreReplacement,
  },
];

const OfferedService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="service-offered-container my-2">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="mx-4 my-3 p-3 rounded-lg h-full border">
              <div className="w-[80%] h-12 mx-auto flex items-center justify-center rounded-md">
                <img
                  src={service.logo}
                  alt={service.name}
                  className="w-14 h-14"
                />
              </div>
              <p className="flex place-items-end my-5 justify-center text-sm font-medium ">
                {service.name}
              </p>

              <div className="flex items-center justify-center ">
                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferedService;
