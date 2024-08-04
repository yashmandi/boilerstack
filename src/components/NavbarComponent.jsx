import React from "react";
import SearchBar from "./SearchBar";

const NavbarComponent = () => {
  return (
    <div>
      <div className="flex flex-row items-center ">
        <div className="navbar p-4">
          <h1 className="text-lg hover:bg-gray-900 cursor-default px-2 py-1 rounded-lg font-bold text-white">
            BoilerStack
          </h1>
        </div>
        <div className="flex-grow flex justify-between items-center p-4">
          <div className="flex">
            <p className="text-sm hover:text-gray-100 mr-2 cursor-pointer font-semibold p-1  text-gray-500 mt-1 transition-all">
              Pricing
            </p>
            <p className="text-sm hover:text-gray-100 mr-2 cursor-pointer font-semibold p-1  text-gray-500 mt-1 transition-all">
              Get Started
            </p>
            <p className="text-sm hover:text-gray-100 cursor-pointer font-semibold p-1  text-gray-500 mt-1 transition-all">
              About
            </p>
          </div>
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
