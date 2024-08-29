import React, { useState } from "react";

const ProductCard = ({ items }) => {
  const initialVisibleCount = 4;
  const [visible, setVisible] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);

  const showMoreItems = () => {
    setVisible((prevVisible) => {
      const newVisible = Math.min(prevVisible + 4, items.length);
      return newVisible;
    });
    setIsExpanded(true);
  };

  const showLessItems = () => {
    setVisible(initialVisibleCount);
    setIsExpanded(false);
  };

  return (
    <div className="right-box-container flex flex-col gap-3 w-full ">
      <div className="grid-container grid grid-flow-row gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  p-2 ">
        {items.slice(0, visible).map((tire) => (
          <div className="p-1 rounded-lg shadow-md  flex flex-col items-center justify-center">
            <div className="flex  w-full mb-1">
              <img
                src={tire.companyLogo}
                alt=""
                className="w-24 h-10 rounded-md"
              />
            </div>
            <div className=" flex w-36 h-36">
              <img
                src={tire.tyreImage}
                alt={`Image of ${tire.model}`}
                className="w-full h-full"
              />
            </div>

            <div className="w-full flex flex-col gap-2 ">
              <div className="flex justify-center items-center text-sm mt-3">
                <p className=" font-semibold ">{tire.tyreModel} -</p>
                <p className="font-semibold"> {tire.tyreSize}</p>
              </div>
            </div>
            <div className="mt-6 mb-2">
              <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center ">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-end">
        {isExpanded ? (
          <button
            onClick={showLessItems}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-fit px-4"
          >
            Show Less
          </button>
        ) : (
          visible < items.length && (
            <button
              onClick={showMoreItems}
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-fit px-4"
            >
              Show More
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;
