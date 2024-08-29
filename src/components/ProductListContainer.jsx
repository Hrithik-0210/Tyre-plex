import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Michelin from "../images/companyLogo/Michelin.png";
import Bridgestone from "../images/companyLogo/bridgestone.png";
import Goodyear from "../images/companyLogo/goodyear.png";
import CooperTire from "../images/companyLogo/Cooper Tire.png";
import Yokohama from "../images/companyLogo/yokohama.webp";
import Nexen from "../images/companyLogo/Nexen.png";
import CEAT from "../images/companyLogo/ceat.png";
import MRF from "../images/companyLogo/MRF-Logo.png";
import TVS from "../images/companyLogo/tvs.png";
import carTyreImage from "../images/Tyre-images/car-tyre.webp";
import bikeTyreImage from "../images/Tyre-images/bike tyre.png";
import scooterTyreImage from "../images/Tyre-images/scooter tyre.png";

const companies = [
  { name: "Michelin" },
  { name: "Bridgestone" },
  { name: "Goodyear" },
  { name: "Cooper Tire" },
  { name: "Yokohama Rubber" },
  { name: "Nexen Tire" },
  { name: "CEAT" },
  { name: "MRF" },
  { name: "TVS TYRES" },
];

const TireFeatures = [
  // Michelin
  {
    companyName: "Michelin",
    companyLogo: Michelin,
    tyreModel: "Primacy 4",
    tyreSize: "195/55 R16",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // Bridgestone
  {
    companyName: "Bridgestone",
    companyLogo: Bridgestone,
    tyreModel: "AMAZER 4G LIFE",
    tyreSize: "145/80 R13",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // Goodyear
  {
    companyName: "Goodyear",
    companyLogo: Goodyear,
    tyreModel: "Assurance TripleMax",
    tyreSize: "165/65 R14",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // Cooper Tire
  {
    companyName: "Cooper Tire",
    companyLogo: CooperTire,
    tyreModel: "Endura Sport",
    tyreSize: "195/60 R15",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // Yokohama Rubber
  {
    companyName: "Yokohama Rubber",
    companyLogo: Yokohama,
    tyreModel: "ADVAN DB V552",
    tyreSize: "205/55 R16",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // Nexen Tire
  {
    companyName: "Nexen Tire",
    companyLogo: Nexen,
    tyreModel: "N'Blue HD Plus",
    tyreSize: "185/65 R15",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // CEAT
  {
    companyName: "CEAT",
    companyLogo: CEAT,
    tyreModel: "SecuraDrive",
    tyreSize: "195/65 R15",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // MRF
  {
    companyName: "MRF",
    companyLogo: MRF,
    tyreModel: "ZTX",
    tyreSize: "175/70 R14",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  // TVS TYRES
  {
    companyName: "TVS TYRES",
    companyLogo: TVS,
    tyreModel: "Jet Sport",
    tyreSize: "185/70 R14",
    tyreCategory: "Car",
    tyreImage: carTyreImage,
  },
  {
    companyName: "Michelin",
    companyLogo: Michelin,
    tyreModel: "City Grip",
    tyreSize: "120/70 R12",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // Bridgestone
  {
    companyName: "Bridgestone",
    companyLogo: Bridgestone,
    tyreModel: "Battlax BT-39",
    tyreSize: "140/70 R17",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // Goodyear
  {
    companyName: "Goodyear",
    companyLogo: Goodyear,
    tyreModel: "Eagle Sport",
    tyreSize: "120/80 R17",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // Cooper Tire
  {
    companyName: "Cooper Tire",
    companyLogo: CooperTire,
    tyreModel: "Discoverer AT3",
    tyreSize: "175/70 R15",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // Yokohama Rubber
  {
    companyName: "Yokohama Rubber",
    companyLogo: Yokohama,
    tyreModel: "Geolandar A/T G015",
    tyreSize: "185/65 R15",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // Nexen Tire
  {
    companyName: "Nexen Tire",
    companyLogo: Nexen,
    tyreModel: "N'Priz SH9I",
    tyreSize: "205/55 R16",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // CEAT
  {
    companyName: "CEAT",
    companyLogo: CEAT,
    tyreModel: "Gripp XL",
    tyreSize: "120/80 R18",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // MRF
  {
    companyName: "MRF",
    companyLogo: MRF,
    tyreModel: "Zapper",
    tyreSize: "100/80 R17",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  // TVS TYRES
  {
    companyName: "TVS TYRES",
    companyLogo: TVS,
    tyreModel: "Eurogrip Pro",
    tyreSize: "175/65 R15",
    tyreCategory: "Bike",
    tyreImage: bikeTyreImage,
  },
  {
    companyName: "Michelin",
    companyLogo: Michelin,
    tyreModel: "City Grip",
    tyreSize: "110/70 R12",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // Bridgestone
  {
    companyName: "Bridgestone",
    companyLogo: Bridgestone,
    tyreModel: "Battlax SC2",
    tyreSize: "130/70 R12",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // Goodyear
  {
    companyName: "Goodyear",
    companyLogo: Goodyear,
    tyreModel: "Eagle NCT",
    tyreSize: "120/70 R10",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // Cooper Tire
  {
    companyName: "Cooper Tire",
    companyLogo: CooperTire,
    tyreModel: "Endura Scooter",
    tyreSize: "120/80 R14",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // Yokohama Rubber
  {
    companyName: "Yokohama Rubber",
    companyLogo: Yokohama,
    tyreModel: "V902",
    tyreSize: "100/80 R16",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // Nexen Tire
  {
    companyName: "Nexen Tire",
    companyLogo: Nexen,
    tyreModel: "N'Blue Scooter",
    tyreSize: "110/80 R12",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // CEAT
  {
    companyName: "CEAT",
    companyLogo: CEAT,
    tyreModel: "Gripp XL",
    tyreSize: "130/70 R12",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // MRF
  {
    companyName: "MRF",
    companyLogo: MRF,
    tyreModel: "Zapper",
    tyreSize: "110/70 R12",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
  // TVS TYRES
  {
    companyName: "TVS TYRES",
    companyLogo: TVS,
    tyreModel: "Eurogrip Pro",
    tyreSize: "120/80 R14",
    tyreCategory: "Scooter",
    tyreImage: scooterTyreImage,
  },
];

const ProductListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filterByCategory = (items, selectedCategory) => {
    return selectedCategory === "All"
      ? items
      : items.filter((item) => item.tyreCategory === selectedCategory);
  };
  const filterByCompany = (items, selectedCompany) => {
    return !selectedCompany
      ? items
      : items.filter((item) => item.companyName === selectedCompany);
  };

  const filteredByCategory = filterByCategory(TireFeatures, selectedCategory);
  const filteredItems = filterByCompany(filteredByCategory, selectedCompany);
  return (
    <div className="Main-product-list-container flex flex-col gap-2 p-2">
      <div className="left-container w-full flex justify-between md:justify-end md:gap-8 lg:gap-16 border p-2">
        <div className="tyre-category flex flex-col items-center">
          <h2 className="text-sm font-medium mb-2">Category</h2>
          <div>
            <select
              className="block w-28 p-1 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-center"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Scooter">Scooter</option>
            </select>
          </div>
        </div>
        <div className="company-category flex flex-col items-center">
          <label
            htmlFor="company-dropdown"
            className="block mb-2 text-sm font-medium"
          >
            Company
          </label>
          <select
            id="company-dropdown"
            className="border p-1 rounded-lg text-sm bg-white"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select a Company</option>
            {companies.map((company, index) => (
              <option key={index} value={company.name}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-container">
        <ProductCard items={filteredItems} />
      </div>
    </div>
  );
};

export default ProductListContainer;
