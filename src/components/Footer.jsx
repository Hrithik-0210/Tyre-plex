import React from "react";
import Logo from "../images/footerLogo.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="top-box-container  border-b my-2 pb-2 grid grid-cols-2">
        <div className="Shop-logo-and-social-media-container  flex flex-col items-center justify-center gap-5">
          <div className="flex ">
            <img src={Logo} alt="logo" className="w-24 h-7 lg:w-32 lg:h-8" />
          </div>
          <div className="social-media-logo flex gap-4  items-center ">
            <FaInstagram className="lg:w-6 lg:h-6" />
            <AiOutlineFacebook className="lg:w-6 lg:h-6 rounded-xl" />
            <RxTwitterLogo className="lg:w-6 lg:h-6 rounded-xl" />
          </div>
        </div>
        <div className="footer-links my-4 flex justify-center ">
          <ul className="grid grid-cols-2 text-xs gap-3 lg:text-sm xl:grid-cols-3">
            <li className="hover:text-blue-600">
              <a href="">Who We Are</a>
            </li>
            <li className="hover:text-blue-600">
              <a href=""> Privacy Policy</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="">Terms of use</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="">Contact Us</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="">Career</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="">Shipping & Return Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-box my-2">
        <p className="text-[11px] text-center text-gray-500 lg:text-xs">
          ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
