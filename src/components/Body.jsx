import React from "react";
import DealSlider from "./DealSlider";
import ShopDetails from "./ShopDetails";
import OfferedService from "./OfferedService";
import PaymentMode from "./PaymentMode";
import UserQuery from "./UserQuery";
import Footer from "./Footer";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <div className="body-main-container w-[80svw] mx-auto bg-inherit">
      <ShopDetails />

      {/* Deals in Box */}
      <div className="dealIn-container w-full mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 bg-inherit">
        <h2 className="text-lg font-medium">Deals in</h2>
        <DealSlider />
      </div>
      {/* Offered Service */}
      <div className="offeredService-container w-full mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 bg-inherit">
        <h2 className="text-lg font-medium">Service Offered by Dealer</h2>
        <OfferedService />
      </div>
      <div className="product-sold-container w-full mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 bg-inherit">
        <h2 className="text-lg font-medium">Product sold by this Dealer</h2>
        <ProductList />
      </div>
      <div className="paymentMode-container w-full mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 bg-inherit">
        <h2 className="text-lg font-medium">Payment Modes</h2>
        <PaymentMode />
      </div>
      <div className="userQuery-container w-full mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 bg-inherit">
        <UserQuery />
      </div>
      <div className="footer-container w-full mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 bg-inherit">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
