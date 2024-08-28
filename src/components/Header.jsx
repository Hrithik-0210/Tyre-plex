import React from "react";
import logo from "../images/logo.png";
import { LiaUserSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className=" w-svw shadow-sm">
      <div className="w-[94svw] flex justify-between  mx-auto">
        <div className="w-40 h-9 my-3">
          <img
            src={logo}
            alt="logo_img"
            className="w-full h-full drop-shadow-none"
          />
        </div>
        <div className="navlinks hidden  lg:flex justify-center items-center">
          <ul className="flex gap-4 text-sm font-medium">
            <li className="border-b border-transparent hover:border-b hover:border-b-amber-800 p-2 ">
              Car Tyres
            </li>
            <li className="border-b border-transparent hover:border-b hover:border-b-amber-800 p-2">
              Bike Tyres
            </li>
            <li className="border-b border-transparent hover:border-b hover:border-b-amber-800 p-2">
              Tyre Pressure
            </li>
            <li className="border-b border-transparent hover:border-b hover:border-b-amber-800 p-2">
              Commercial Tyres
            </li>
            <li className="border-b border-transparent hover:border-b hover:border-b-amber-800 p-2">
              Accessories
            </li>
            <li className="border-b border-transparent hover:border-b hover:border-b-amber-800 p-2">
              More
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center p-2">
          <button className=" flex justify-center items-center gap-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition ease-in-out delay-150 bg-blue-500 duration-100">
            <LiaUserSolid className="w-5 h-5" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
