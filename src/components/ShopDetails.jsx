import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import GoogleReview from "./GoogleReview";
import ShopImageSlider from "./ShopImageSlider";

const ShopDetails = () => {
  return (
    <div className="shop-Info-container p-2 shadow-lg  mt-2 ">
      <div className="top-box flex flex-col md:flex-row w-full  justify-between ">
        <div className="leftBox-shop-Details-container md:w-[60%]">
          <div className="shop-name flex gap-2">
            <h2 className="text-base font-semibold lg:text-base">
              SHREE HEMKUNT TYRES AND SERVICES
            </h2>
            <span className="text-green-500 flex">
              <MdOutlineVerifiedUser />
              <p className="text-xs ">Verified</p>
            </span>
          </div>
          <div className="shop-rating-container my-2 flex gap-4">
            <p className="text-xs bg-green-500 text-white w-fit h-fit px-1 rounded-sm ">
              4.9
            </p>
            <div className="text-yellow-400  flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-xs font-medium">2248 Reviews</p>
            <button className="flex justify-center items-center text-xs font-thin bg-transparent hover:bg-gray-500 text-gray-500  hover:text-white px-1 border border-gray-500 hover:border-transparent rounded transition ease-in-out delay-150 duration-100">
              Rate
            </button>
          </div>
          <div className="shop-address-container my-4">
            <div className="address-details flex items-center justify-start gap-3">
              <CiLocationOn className="w-6 h-6" />
              <p className="text-sm">
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </p>
            </div>
            <div className="timing-details flex items-center justify-start gap-3 text-gray-500 my-1">
              <IoTimeOutline className="w-5 h-5 ml-1" />
              <p className="text-sm ">
                Open - Monday to Sunday - 10:00AM to 8:00PM
              </p>
            </div>
          </div>
          <div className="directin-button my-4">
            <button className=" flex justify-center items-center gap-2 bg-transparent hover:bg-red-500 text-red-500 font-medium hover:text-white py-2 px-10 border border-red-500 hover:border-transparent rounded transition ease-in-out delay-150  duration-100">
              <span>Get Directions</span>
            </button>
          </div>
        </div>
        <div className="right-side-image-conatiner hidden lg:block  md:w-1/3 shadow-lg rounded-lg  h-fit">
          <ShopImageSlider />
        </div>
      </div>
      <div className="bottom-box google-review-Container my-4">
        <h2 className="text-sm font-medium my-1 mx-2">5423 Google reviews</h2>
        <div className="google-review-sliders">
          <GoogleReview />
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
