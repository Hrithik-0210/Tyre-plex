import React from "react";
import QueryIcon from "../images/queryIcon.png";

const UserQuery = () => {
  return (
    <div className="User-queryContainer">
      <div className="query-container flex gap-4">
        <div className="left-container  w-1/3 md:1/2 flex justify-center items-center">
          <img
            src={QueryIcon}
            alt="queryIcon"
            className="w-20 h-18  md:w-40 md:h-44 xl:w-56 xl:h-56"
          />
        </div>
        <div className="right-box-container w-2/3 flex flex-col justify-center items-center xl:items-start">
          <div className="">
            <h2 className="text-sm md:text-lg font-medium lg:text-2xl lg:font-semibold xl:text-3xl xl:font-bold">
              Have a question about Tyres?
            </h2>
            <p className="text-[11px] md:text-xs text-gray-500 my-1 xl:text-sm xl:my-1">
              Get an answer in 24 hours from our experts.
            </p>
            <div></div>
            <input
              type="text"
              placeholder="Ask your question"
              className="my-4 rounded-lg text-xs p-1 md:p-2 w-60 lg:w-96 lg:p-3 xl:w-96 xl:p-3 border"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-medium py-1 px-3 ml-2 border border-blue-700 rounded md:text-sm xl:py-2 xl:px-4 xl:ml-4">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserQuery;
