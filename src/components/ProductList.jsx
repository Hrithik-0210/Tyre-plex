import React, { useState } from "react";
import CartyreImage from "../images/Tyre-images/car-tyre.webp";

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
    company: "Michelin",
    model: "Primacy 4",
    size: "195/55 R16",
    features: 5,
    reviews: "500 Reviews",
    price: "₹ 6,499",
    offer: "No current offers",
    type: "Tubeless",
    category: "Car",
  },
  // Bridgestone
  {
    company: "Bridgestone",
    model: "AMAZER 4G LIFE",
    size: "145/80 R13",
    features: 4,
    reviews: "321 Reviews",
    price: "₹ 3,562",
    offer: "Offer available",
    type: "Tubeless",
    category: "Car",
  },
  // Goodyear
  {
    company: "Goodyear",
    model: "Assurance TripleMax",
    size: "165/65 R14",
    features: 5,
    reviews: "410 Reviews",
    price: "₹ 4,199",
    offer: "Discounted price",
    type: "Tubeless",
    category: "Car",
  },
  // Cooper Tire
  {
    company: "Cooper Tire",
    model: "Endura Sport",
    size: "195/60 R15",
    features: 4,
    reviews: "200 Reviews",
    price: "₹ 4,000",
    offer: "No current offers",
    type: "Tubeless",
    category: "Car",
  },
  // Yokohama Rubber
  {
    company: "Yokohama Rubber",
    model: "ADVAN DB V552",
    size: "205/55 R16",
    features: 5,
    reviews: "330 Reviews",
    price: "₹ 5,200",
    offer: "Seasonal offer",
    type: "Tubeless",
    category: "Car",
  },
  // Nexen Tire
  {
    company: "Nexen Tire",
    model: "N'Blue HD Plus",
    size: "185/65 R15",
    features: 4,
    reviews: "190 Reviews",
    price: "₹ 4,150",
    offer: "Buy one get one free",
    type: "Tubeless",
    category: "Car",
  },
  // CEAT
  {
    company: "CEAT",
    model: "SecuraDrive",
    size: "195/65 R15",
    features: 4,
    reviews: "250 Reviews",
    price: "₹ 3,900",
    offer: "Cashback offer",
    type: "Tubeless",
    category: "Car",
  },
  // MRF
  {
    company: "MRF",
    model: "ZTX",
    size: "175/70 R14",
    features: 5,
    reviews: "450 Reviews",
    price: "₹ 4,100",
    offer: "Special discount",
    type: "Tubeless",
    category: "Car",
  },
  // TVS TYRES
  {
    company: "TVS TYRES",
    model: "Jet Sport",
    size: "185/70 R14",
    features: 4,
    reviews: "160 Reviews",
    price: "₹ 3,800",
    offer: "Free alignment",
    type: "Tubeless",
    category: "Car",
  },
  {
    company: "Michelin",
    model: "City Grip",
    size: "120/70 R12",
    features: 4,
    reviews: "180 Reviews",
    price: "₹ 2,500",
    offer: "No current offers",
    type: "Tubeless",
    category: "Bike",
  },
  // Bridgestone
  {
    company: "Bridgestone",
    model: "Battlax BT-39",
    size: "140/70 R17",
    features: 4,
    reviews: "220 Reviews",
    price: "₹ 3,200",
    offer: "Seasonal discount",
    type: "Tubeless",
    category: "Bike",
  },
  // Goodyear
  {
    company: "Goodyear",
    model: "Eagle Sport",
    size: "120/80 R17",
    features: 4,
    reviews: "200 Reviews",
    price: "₹ 3,000",
    offer: "Buy one get one free",
    type: "Tubeless",
    category: "Bike",
  },
  // Cooper Tire
  {
    company: "Cooper Tire",
    model: "Discoverer AT3",
    size: "175/70 R15",
    features: 4,
    reviews: "280 Reviews",
    price: "₹ 5,150",
    offer: "No current offers",
    type: "Tubeless",
    category: "Bike",
  },
  // Yokohama Rubber
  {
    company: "Yokohama Rubber",
    model: "Geolandar A/T G015",
    size: "185/65 R15",
    features: 4,
    reviews: "150 Reviews",
    price: "₹ 4,800",
    offer: "Seasonal offer",
    type: "Tubeless",
    category: "Bike",
  },
  // Nexen Tire
  {
    company: "Nexen Tire",
    model: "N'Priz SH9I",
    size: "205/55 R16",
    features: 4,
    reviews: "220 Reviews",
    price: "₹ 4,300",
    offer: "Buy one get one free",
    type: "Tubeless",
    category: "Bike",
  },
  // CEAT
  {
    company: "CEAT",
    model: "Gripp XL",
    size: "120/80 R18",
    features: 4,
    reviews: "210 Reviews",
    price: "₹ 2,900",
    offer: "Cashback offer",
    type: "Tubeless",
    category: "Bike",
  },
  // MRF
  {
    company: "MRF",
    model: "Zapper",
    size: "100/80 R17",
    features: 4,
    reviews: "250 Reviews",
    price: "₹ 2,700",
    offer: "Special discount",
    type: "Tubeless",
    category: "Bike",
  },
  // TVS TYRES
  {
    company: "TVS TYRES",
    model: "Eurogrip Pro",
    size: "175/65 R15",
    features: 4,
    reviews: "150 Reviews",
    price: "₹ 3,950",
    offer: "Free alignment",
    type: "Tubeless",
    category: "Bike",
  },
  {
    company: "Michelin",
    model: "City Grip",
    size: "110/70 R12",
    features: 4,
    reviews: "200 Reviews",
    price: "₹ 2,400",
    offer: "No current offers",
    type: "Tubeless",
    category: "Scooter",
  },
  // Bridgestone
  {
    company: "Bridgestone",
    model: "Battlax SC2",
    size: "130/70 R12",
    features: 4,
    reviews: "180 Reviews",
    price: "₹ 2,800",
    offer: "Seasonal discount",
    type: "Tubeless",
    category: "Scooter",
  },
  // Goodyear
  {
    company: "Goodyear",
    model: "Eagle NCT",
    size: "120/70 R10",
    features: 4,
    reviews: "190 Reviews",
    price: "₹ 2,600",
    offer: "Buy one get one free",
    type: "Tubeless",
    category: "Scooter",
  },
  // Cooper Tire
  {
    company: "Cooper Tire",
    model: "Endura Scooter",
    size: "120/80 R14",
    features: 4,
    reviews: "170 Reviews",
    price: "₹ 2,700",
    offer: "No current offers",
    type: "Tubeless",
    category: "Scooter",
  },
  // Yokohama Rubber
  {
    company: "Yokohama Rubber",
    model: "V902",
    size: "100/80 R16",
    features: 4,
    reviews: "160 Reviews",
    price: "₹ 2,500",
    offer: "Seasonal offer",
    type: "Tubeless",
    category: "Scooter",
  },
  // Nexen Tire
  {
    company: "Nexen Tire",
    model: "N'Blue Scooter",
    size: "110/80 R12",
    features: 4,
    reviews: "180 Reviews",
    price: "₹ 2,650",
    offer: "Buy one get one free",
    type: "Tubeless",
    category: "Scooter",
  },
  // CEAT
  {
    company: "CEAT",
    model: "Gripp XL",
    size: "130/70 R12",
    features: 4,
    reviews: "200 Reviews",
    price: "₹ 2,900",
    offer: "Cashback offer",
    type: "Tubeless",
    category: "Scooter",
  },
  // MRF
  {
    company: "MRF",
    model: "Zapper",
    size: "110/70 R12",
    features: 4,
    reviews: "250 Reviews",
    price: "₹ 2,700",
    offer: "Special discount",
    type: "Tubeless",
    category: "Scooter",
  },
  // TVS TYRES
  {
    company: "TVS TYRES",
    model: "Eurogrip Pro",
    size: "120/80 R14",
    features: 4,
    reviews: "150 Reviews",
    price: "₹ 2,800",
    offer: "Free alignment",
    type: "Tubeless",
    category: "Scooter",
  },
];

const ProductList = () => {
  const initialVisibleCount = 6;
  const [visible, setVisible] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);

  const showMoreItems = () => {
    setVisible((prevVisible) => {
      const newVisible = Math.min(prevVisible + 6, TireFeatures.length);
      return newVisible;
    });
    setIsExpanded(true);
  };

  const showLessItems = () => {
    setVisible(initialVisibleCount);
    setIsExpanded(false);
  };
  return (
    <div className="border border-red-500 flex flex-col gap-2">
      <div className="left-container w-1/3 lg:w-1/5 flex gap-10">
        <div className="tyre-category ">
          <h2 className="text-lg font-medium mb-2 border-b">Category</h2>
          <div className="">
            <select
              //   value={selectedCategory}
              //   onChange={handleCategoryChange}
              className="block w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Scooter">Scooter</option>
            </select>
          </div>
        </div>
        <div className="company-category flex flex-col ">
          <label
            htmlFor="company-dropdown"
            className="block mb-2 text-lg font-medium"
          >
            Company
          </label>
          <select
            id="company-dropdown"
            // value={selectedCompany}
            // onChange={handleChange}
            className="border p-1 rounded-lg"
          >
            <option value="">-- Select a Company --</option>
            {companies.map((company, index) => (
              <option key={index} value={company.name}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="">
        <div className="right-box-container flex flex-col gap-3">
          <div className="grid-container grid grid-flow-row gap-4 lg:grid-cols-3  border border-green-500 p-2 ">
            {TireFeatures.slice(0, visible).map((tire, index) => (
              <div
                key={index}
                className="relative border border-red-500 p-4 rounded-lg shadow-md bg-white flex items-start justify-between"
              >
                <div className="flex-1">
                  <h2>{tire.company.toUpperCase()}</h2>
                  <p>{tire.model}</p>
                  <p>{tire.size}</p>
                  <p>{tire.features}</p>
                  <p>{tire.reviews}</p>
                  <p>{tire.price}</p>
                  <p>{tire.offer}</p>
                  <p>{tire.type}</p>
                  <p>{tire.category}</p>
                </div>

                <div className="absolute bottom-0 -right-5 w-1/2 h-auto object-cover">
                  <img src={CartyreImage} alt="" className="" />
                </div>
              </div>
            ))}
          </div>

          {isExpanded ? (
            <button
              onClick={showLessItems}
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Show Less
            </button>
          ) : (
            visible < TireFeatures.length && (
              <button
                onClick={showMoreItems}
                className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Show More
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
