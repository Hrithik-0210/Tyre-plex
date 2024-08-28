import React from "react";
import DepositAccountIcon from "../images/icons/bank.png";
import CreditDebitIcon from "../images/icons/atm-card.png";
import WalletIcon from "../images/icons/wallet.png";
import NetBankingIcon from "../images/icons/mobile-banking.png";
import UPI_Icon from "../images/icons/upi.png";
import Slider from "react-slick";

const paymentModes = [
  {
    name: "Deposit to Account",
    icon: DepositAccountIcon,
  },
  {
    name: "Credit Card/Debit Card",
    icon: CreditDebitIcon,
  },
  {
    name: "Wallets (PayTM/PhonePe)",
    icon: WalletIcon,
  },
  {
    name: "Net Banking",
    icon: NetBankingIcon,
  },
  {
    name: "UPI",
    icon: UPI_Icon,
  },
];

const PaymentMode = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className="payment-mode-container grid grid-flow-row  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {paymentModes.map((paymentMode, index) => (
        <div key={index} className=" p-1 mt-2">
          <div className="rounded-lg  flex gap-3  items-center justify-start p-2 border ">
            <div className="rounded-md">
              <img
                src={paymentMode.icon}
                alt={paymentMode.icon}
                className="w-7 h-7"
              />
            </div>
            <p className=" text-xs md:text-sm">{paymentMode.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMode;
