import React from "react";
import SearchBar from "./SearchBar";

const NavbarComponent = () => {
  return (
    <div>
      <div className="flex flex-row items-center p-2 ">
        <div className="navbar p-4">
          <h1 className="text-md hover:bg-gray-900 cursor-default p-2 rounded-lg font-bold text-white">
            BoilerStack
          </h1>
        </div>
        <div className="flex-grow flex justify-between items-center p-4">
          <div className="flex">
            <p className="text-sm hover:text-gray-100 mr-4 cursor-pointer font-semibold p-1 hover:underline text-gray-400 transition-all">
              Pricing
            </p>
            <p className="text-sm hover:text-gray-100 cursor-pointer font-semibold p-1 hover:underline text-gray-400 transition-all">
              Get Started
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