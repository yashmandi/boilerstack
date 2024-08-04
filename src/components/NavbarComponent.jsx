import React from "react";
import SearchBar from "./SearchBar";
import BS_Logo from "../assets/BS_Logo.png";

const NavbarComponent = () => {
  return (
    <div>
      <div className="flex flex-row items-center ">
        <div className="navbar p-4">
          <h1 className="text-lg flex cursor-default px-2 py-1 rounded-lg hover:bg-gray-900 transition-all font-bold text-white">
            <div className="flex items-center">
              <img src={BS_Logo} className="h-8 w-8 mr-1" alt="" />
              BoilerStack
            </div>
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
